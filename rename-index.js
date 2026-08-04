import fs from 'fs';
import path from 'path';

const cwd = process.cwd();
const isLocal = cwd.includes('/Users/parthgulati');

if (!isLocal && fs.existsSync('index.html')) {
  fs.renameSync('index.html', 'index.source.html');
  console.log('[BUILD] Renamed root index.html to index.source.html to prevent Hostinger Nginx static override.');
} else {
  console.log('[BUILD] Local environment detected. Kept root index.html intact.');
}
