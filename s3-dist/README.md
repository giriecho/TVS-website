# S3 Static Distribution

This folder contains the static files ready for S3 deployment.

## Structure

```
s3-dist/
├── index.html              # Homepage
├── 404.html                # Error page
├── favicon.png             # Site icon
├── robots.txt              # SEO robots file
├── about/
│   └── index.html          # About page
├── services/
│   └── index.html          # Services page
├── projects/
│   └── index.html          # Projects page
├── contact/
│   └── index.html          # Contact page
└── assets/
    ├── *.css               # Stylesheets
    ├── *.js                # JavaScript bundles
    ├── *.jpg               # Images
    └── *.png               # Logos and icons
```

## Quick Deploy

```bash
# Deploy to S3
aws s3 sync . s3://your-bucket-name/ --delete

# Enable static website hosting
aws s3 website s3://your-bucket-name/ \
  --index-document index.html \
  --error-document 404.html
```

See `../S3-DEPLOYMENT.md` for complete deployment instructions.

## File Sizes

- Total size: ~4.5 MB
- Images: ~4.3 MB (TVS logos and hero images)
- JS bundles: ~360 KB
- CSS: ~110 KB

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Progressive enhancement
