import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync, readFileSync, writeFileSync } from 'fs';
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

// Fix index.html paths for GitHub Pages
console.log('🔧 Fixing asset paths for GitHub Pages...');
const indexPath = 'docs/index.html';
if (existsSync(indexPath)) {
  let indexContent = readFileSync(indexPath, 'utf-8');
  
  // Replace absolute paths with relative paths
  indexContent = indexContent.replace(/src="\/assets\//g, 'src="./assets/');
  indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');
  
  // Remove the replit dev banner for production
  indexContent = indexContent.replace(/<script type="text\/javascript" src="https:\/\/replit\.com\/public\/js\/replit-dev-banner\.js"><\/script>/g, '');
  
  writeFileSync(indexPath, indexContent);
}

// Create .nojekyll file for GitHub Pages
console.log('📄 Creating .nojekyll file...');
writeFileSync('docs/.nojekyll', '');

// Create 404.html for SPA routing (GitHub Pages will serve this for missing routes)
console.log('🔄 Creating 404.html for SPA routing...');
let spa404Content = readFileSync('docs/index.html', 'utf-8');

// Add SPA redirect script to handle GitHub Pages routing
const redirectScript = `
<script>
  // Redirect from 404 page to index with path as query parameter
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>`;

// Simply copy index.html as 404.html for GitHub Pages SPA
const indexHtmlContent = readFileSync('docs/index.html', 'utf-8');
writeFileSync('docs/404.html', indexHtmlContent);

console.log('🔄 Simple SPA setup completed');

console.log('✅ Static site built successfully!');
console.log('📂 Files are ready in the "docs" directory for GitHub Pages');
console.log('📝 Configure GitHub Pages to serve from "docs" folder');