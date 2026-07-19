# S3 Static Website Deployment Guide

This guide will help you deploy the Trishul Visionary Studios website to AWS S3 as a static website.

## Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI installed and configured (`aws configure`)
3. An S3 bucket created for hosting

## Build for S3

Build the static distribution optimized for S3:

```bash
bun run build:s3
```

This will create an `s3-dist/` folder with all necessary files:
- HTML files for each route (`/`, `/about`, `/services`, `/projects`, `/contact`)
- All assets (CSS, JS, images)
- `404.html` for error handling
- `favicon.png` and `robots.txt`

## Deploy to S3

### Step 1: Sync Files to S3

Replace `your-bucket-name` with your actual S3 bucket name:

```bash
aws s3 sync ./s3-dist/ s3://your-bucket-name/ --delete
```

The `--delete` flag removes files from S3 that are no longer in your local build.

### Step 2: Configure S3 Bucket for Static Website Hosting

#### Via AWS Console:

1. Go to your S3 bucket in AWS Console
2. Navigate to **Properties** tab
3. Scroll to **Static website hosting**
4. Click **Edit**
5. Enable static website hosting
6. Set **Index document**: `index.html`
7. Set **Error document**: `404.html`
8. Save changes

#### Via AWS CLI:

```bash
aws s3 website s3://your-bucket-name/ \
  --index-document index.html \
  --error-document 404.html
```

### Step 3: Set Bucket Policy for Public Access

Create a file called `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

Replace `your-bucket-name` with your bucket name, then apply:

```bash
aws s3api put-bucket-policy \
  --bucket your-bucket-name \
  --policy file://bucket-policy.json
```

### Step 4: Disable Block Public Access

#### Via AWS Console:

1. Go to bucket **Permissions** tab
2. Edit **Block public access** settings
3. Uncheck "Block all public access"
4. Save changes

#### Via AWS CLI:

```bash
aws s3api put-public-access-block \
  --bucket your-bucket-name \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

## Access Your Website

Your website will be available at:

```
http://your-bucket-name.s3-website-<region>.amazonaws.com
```

For example:
- `http://my-bucket.s3-website-us-east-1.amazonaws.com`
- `http://my-bucket.s3-website-eu-west-1.amazonaws.com`

## Optional: CloudFront CDN Setup

For better performance, HTTPS, and custom domain:

### 1. Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
  --origin-domain-name your-bucket-name.s3-website-<region>.amazonaws.com \
  --default-root-object index.html
```

### 2. Configure Custom Error Pages

In CloudFront distribution settings:
- Add custom error response for 403 and 404 errors
- Set response page path to `/404.html`
- Set HTTP response code to 404

### 3. Add Custom Domain (Optional)

1. Request SSL certificate in AWS Certificate Manager (ACM)
2. Add your domain to CloudFront distribution
3. Update DNS records to point to CloudFront distribution

## Content Type Configuration

Ensure proper MIME types are set for assets:

```bash
# Set content type for CSS files
aws s3 cp s3://your-bucket-name/assets/ s3://your-bucket-name/assets/ \
  --recursive --exclude "*" --include "*.css" \
  --content-type "text/css" --metadata-directive REPLACE

# Set content type for JS files  
aws s3 cp s3://your-bucket-name/assets/ s3://your-bucket-name/assets/ \
  --recursive --exclude "*" --include "*.js" \
  --content-type "application/javascript" --metadata-directive REPLACE
```

## Cache Control (Optional)

Set cache headers for better performance:

```bash
# Long cache for assets (1 year)
aws s3 cp s3://your-bucket-name/assets/ s3://your-bucket-name/assets/ \
  --recursive --cache-control "max-age=31536000,public" \
  --metadata-directive REPLACE

# Short cache for HTML (5 minutes)
aws s3 cp s3://your-bucket-name/ s3://your-bucket-name/ \
  --recursive --exclude "*" --include "*.html" \
  --cache-control "max-age=300,public" --metadata-directive REPLACE
```

## Continuous Deployment Script

Create a deploy script `deploy.sh`:

```bash
#!/bin/bash
set -e

echo "Building for S3..."
bun run build:s3

echo "Syncing to S3..."
aws s3 sync ./s3-dist/ s3://your-bucket-name/ --delete

echo "Setting content types..."
aws s3 cp s3://your-bucket-name/assets/ s3://your-bucket-name/assets/ \
  --recursive --exclude "*" --include "*.css" \
  --content-type "text/css" --metadata-directive REPLACE

aws s3 cp s3://your-bucket-name/assets/ s3://your-bucket-name/assets/ \
  --recursive --exclude "*" --include "*.js" \
  --content-type "application/javascript" --metadata-directive REPLACE

echo "✅ Deployment complete!"
echo "Website: http://your-bucket-name.s3-website-<region>.amazonaws.com"
```

Make it executable:

```bash
chmod +x deploy.sh
```

## Troubleshooting

### Issue: 403 Forbidden Error

**Solution:** Check that:
1. Bucket policy allows public read access
2. Block public access is disabled
3. Files are publicly readable

### Issue: CSS/JS Not Loading

**Solution:** Verify content types:
```bash
aws s3api head-object --bucket your-bucket-name --key assets/styles-oeSjD-Tq.css
```

### Issue: Routes Return 404

**Solution:** Ensure:
1. Each route has an `index.html` file
2. Error document is set to `404.html`
3. Static website hosting is enabled

### Issue: Images Not Displaying

**Solution:** Check that image files are synced:
```bash
aws s3 ls s3://your-bucket-name/assets/ --recursive | grep png
```

## Cost Estimation

S3 static website hosting costs (approximate):
- **Storage**: ~$0.023 per GB/month
- **Data Transfer**: First 1GB free, then $0.09 per GB
- **Requests**: $0.0004 per 1,000 GET requests

For a site with 10,000 monthly visitors:
- Storage (5MB): ~$0.0001/month
- Transfer (50GB): ~$4.50/month  
- Requests (50,000): ~$0.02/month
- **Total**: ~$5/month

Adding CloudFront CDN adds ~$1-2/month for similar traffic.

## Security Best Practices

1. **Enable CloudFront** for HTTPS support
2. **Use WAF** to protect against common attacks
3. **Enable S3 access logging** for monitoring
4. **Implement CSP headers** via CloudFront
5. **Regular security audits** of bucket policies

## Next Steps

- Set up CloudFront for HTTPS and better performance
- Configure custom domain with Route 53
- Set up CI/CD pipeline (GitHub Actions, GitLab CI, etc.)
- Enable CloudWatch monitoring
- Configure automated backups

For production use, we highly recommend using CloudFront with a custom domain and SSL certificate.
