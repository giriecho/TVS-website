#!/bin/bash
set -e

# Configuration
BUCKET_NAME="${1:-your-bucket-name}"
REGION="${2:-us-east-1}"

if [ "$BUCKET_NAME" = "your-bucket-name" ]; then
  echo "❌ Error: Please provide bucket name"
  echo "Usage: ./deploy-to-s3.sh <bucket-name> [region]"
  echo "Example: ./deploy-to-s3.sh my-tvs-bucket us-east-1"
  exit 1
fi

echo "🚀 Deploying Trishul Visionary Studios to S3..."
echo "📦 Bucket: $BUCKET_NAME"
echo "🌍 Region: $REGION"
echo ""

# Build
echo "📦 Building production bundle..."
bun run build
echo "✅ Build complete"
echo ""

# Sync to S3
echo "☁️  Syncing files to S3..."
aws s3 sync ./dist/ s3://$BUCKET_NAME/ --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "index.html" \
  --exclude "*.html"

# Upload HTML with short cache
aws s3 sync ./dist/ s3://$BUCKET_NAME/ \
  --exclude "*" \
  --include "*.html" \
  --cache-control "public, max-age=0, must-revalidate" \
  --content-type "text/html"

echo "✅ Files synced"
echo ""

# Configure S3 website
echo "🔧 Configuring S3 static website..."
aws s3 website s3://$BUCKET_NAME/ \
  --index-document index.html \
  --error-document index.html

echo "✅ Website configuration set"
echo ""

# Set bucket policy
echo "🔐 Setting bucket policy..."
cat > /tmp/bucket-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
  }]
}
EOF

aws s3api put-bucket-policy \
  --bucket $BUCKET_NAME \
  --policy file:///tmp/bucket-policy.json

echo "✅ Bucket policy set"
echo ""

# Get website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo "🎉 Deployment complete!"
echo ""
echo "🌐 Website URL: $WEBSITE_URL"
echo ""
echo "📝 Next steps:"
echo "  1. Test the website at the URL above"
echo "  2. (Optional) Set up CloudFront for HTTPS and better performance"
echo "  3. (Optional) Configure custom domain with Route 53"
echo ""
