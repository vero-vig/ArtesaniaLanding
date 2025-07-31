import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync } from 'fs';
import path from 'path';

console.log('🚀 Building static site for GitHub Pages...');

// Clean previous builds
if (existsSync('dist')) {
  rmSync('dist', { recursive: true, force: true });
}
if (existsSync('docs')) {
  rmSync('docs', { recursive: true, force: true });
}

// Build the project
console.log('📦 Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Create docs directory for GitHub Pages
mkdirSync('docs', { recursive: true });

// Copy built files from dist/public to docs
console.log('📁 Copying files to docs directory...');
const copyRecursively = (src, dest) => {
  if (!existsSync(src)) return;
  
  const stat = statSync(src);
  if (stat.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    const items = readdirSync(src);
    items.forEach(item => {
      copyRecursively(path.join(src, item), path.join(dest, item));
    });
  } else {
    copyFileSync(src, dest);
  }
};

// Copy all built files to docs
copyRecursively('dist/public', 'docs');

// Copy the root index.html to docs
if (existsSync('index.html')) {
  copyFileSync('index.html', 'docs/index.html');
}

console.log('✅ Static site built successfully!');
console.log('📂 Files are ready in the "docs" directory for GitHub Pages');
console.log('📝 Configure GitHub Pages to serve from "docs" folder');