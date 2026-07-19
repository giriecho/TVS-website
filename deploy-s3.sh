#!/bin/bash
set -e

# Configuration - UPDATE THESE VALUES
BUCKET_NAME="your-bucket-name"
REGION="us-east-1"

echo "🚀 Deploying Trishul Visionary Studios to S3..."
echo ""

# Check if bucket name is set
if [ "$BUCKET_NAME" = "your-bucket-name" ]; then
    echo "❌ Error: Please update BUCKET_NAME in deploy-s3.sh"
    exit 1
fi

# Build
echo "📦 Building for S3..."
bun run build:s3
echo "✅ Build complete"
echo ""

# Sync to S3
echo "☁️  Syncing files to S3..."
aws s3 sync ./s3-dist/ s3://$BUCKET_NAME/ --delete
echo "✅ Files synced"
echo ""

# Set content types
echo "🔧 Setting content types..."
aws s3 cp s3://$BUCKET_NAME/assets/ s3://$BUCKET_NAME/assets/ \
  --recursive --exclude "*" --include "*.css" \
  --content-type "text/css" --metadata-directive REPLACE \
  --quiet

aws s3 cp s3://$BUCKET_NAME/assets/ s3://$BUCKET_NAME/assets/ \
  --recursive --exclude "*" --include "*.js" \
  --content-type "application/javascript" --metadata-directive REPLACE \
  --quiet

aws s3 cp s3://$BUCKET_NAME/assets/ s3://$BUCKET_NAME/assets/ \
  --recursive --exclude "*" --include "*.png" \
  --content-type "image/png" --metadata-directive REPLACE \
  --quiet

aws s3 cp s3://$BUCKET_NAME/assets/ s3://$BUCKET_NAME/assets/ \
  --recursive --exclude "*" --include "*.jpg" \
  --content-type "image/jpeg" --metadata-directive REPLACE \
  --quiet

echo "✅ Content types set"
echo ""

# Set cache control
echo "⚡ Setting cache headers..."
# Long cache for assets (1 year)
aws s3 cp s3://$BUCKET_NAME/assets/ s3://$BUCKET_NAME/assets/ \
  --recursive --cache-control "max-age=31536000,public" \
  --metadata-directive REPLACE \
  --quiet

# Short cache for HTML (5 minutes)
aws s3 cp s3://$BUCKET_NAME/ s3://$BUCKET_NAME/ \
  --recursive --exclude "*" --include "*.html" \
  --cache-control "max-age=300,public" \
  --metadata-directive REPLACE \
  --quiet

echo "✅ Cache headers set"
echo ""

echo "🎉 Deployment complete!"
echo ""
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "📝 Make sure static website hosting is enabled:"
echo "   aws s3 website s3://$BUCKET_NAME/ --index-document index.html --error-document 404.html"
