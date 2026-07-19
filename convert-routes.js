const fs = require('fs');
const path = require('path');

const files = ['about.tsx', 'services.tsx', 'projects.tsx', 'contact.tsx'];

files.forEach(file => {
  const routePath = path.join(__dirname, 'src/routes', file);
  const content = fs.readFileSync(routePath, 'utf8');
  
  // Replace TanStack imports with React Router
  let newContent = content.replace(
    /import\s*{[^}]*}\s*from\s*"@tanstack\/react-router";?/g,
    'import { Link } from "react-router-dom";'
  );
  
  // Remove createFileRoute and Route export
  newContent = newContent.replace(/export const Route = createFileRoute\([^)]*\)\(\{[\s\S]*?\}\);?\s*/g, '');
  
  // Remove head function
  newContent = newContent.replace(/head:\s*\(\)\s*=>\s*\(\{[\s\S]*?\}\),?\s*/g, '');
  
  // Extract the component function and make it default export
  const componentMatch = newContent.match(/function\s+(\w+)\s*\(\)/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    newContent = newContent.replace(
      `function ${componentName}()`,
      `export default function ${componentName}()`
    );
  }
  
  // Write to pages directory
  const pageName = file.charAt(0).toUpperCase() + file.slice(1);
  const pagePath = path.join(__dirname, 'src/pages', pageName);
  fs.writeFileSync(pagePath, newContent);
  console.log(`Converted ${file} to ${pageName}`);
});
