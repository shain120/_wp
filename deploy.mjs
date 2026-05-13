import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

console.log('Building project...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('Creating .gitignore in dist to override global gitignore...');
writeFileSync('dist/.gitignore', '!*.ttf\n!*.otf\n');

console.log('Deploying to gh-pages...');
execSync('npx gh-pages -d dist -t', { stdio: 'inherit' });
console.log('Done!');
