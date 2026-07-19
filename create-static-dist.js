#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create s3-dist directory
const s3DistPath = path.join(__dirname, 's3-dist');
if (fs.existsSync(s3DistPath)) {
  fs.rmSync(s3DistPath, { recursive: true });
}
fs.mkdirSync(s3DistPath, { recursive: true });

// Copy client assets
const clientPath = path.join(__dirname, 'dist', 'client');
const clientFiles = fs.readdirSync(clientPath, { recursive: true });

clientFiles.forEach(file => {
  const srcPath = path.join(clientPath, file);
  const destPath = path.join(s3DistPath, file);
  
  if (fs.statSync(srcPath).isDirectory()) {
    fs.mkdirSync(destPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Create index.html for each route
const routes = ['/', '/about', '/services', '/projects', '/contact'];

// Base HTML template
const createHTML = (route) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Trishul Visionary Studios — Where Imagination Meets the Screen</title>
  <meta name="description" content="Trishul Visionary Studios is a premier Hyderabad-based production house crafting feature films, digital content, sound design and cinematic experiences.">
  <meta name="author" content="Trishul Visionary Studios">
  <meta name="theme-color" content="#0f0a06">
  <meta property="og:title" content="Trishul Visionary Studios">
  <meta property="og:description" content="Where Imagination Meets the Screen. Feature films, post-production and sound design from Hyderabad.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Trishul Visionary Studios">
  <meta name="twitter:description" content="Where Imagination Meets the Screen.">
  <link rel="icon" href="/favicon.png" type="image/png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap">
  <link rel="stylesheet" href="/assets/styles-oeSjD-Tq.css">
  <script type="module" src="/assets/index-DxK9nuF2.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>
`;

routes.forEach(route => {
  const routePath = route === '/' ? '' : route;
  const dirPath = path.join(s3DistPath, routePath);
  
  if (routePath) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const htmlPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(htmlPath, createHTML(route));
  console.log(`Created: ${htmlPath}`);
});

// Create 404.html for S3
const notFoundHTML = createHTML('/');
fs.writeFileSync(path.join(s3DistPath, '404.html'), notFoundHTML);
console.log('Created: 404.html');

console.log('\n✅ S3 static distribution created in ./s3-dist/');
console.log('\nTo deploy to S3:');
console.log('  aws s3 sync ./s3-dist/ s3://your-bucket-name/ --delete');
console.log('\nMake sure to:');
console.log('  1. Enable static website hosting on your S3 bucket');
console.log('  2. Set index document to: index.html');
console.log('  3. Set error document to: 404.html');
console.log('  4. Configure bucket policy for public read access');
