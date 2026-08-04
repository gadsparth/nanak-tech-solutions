import fs from 'fs';
import path from 'path';

const cwd = process.cwd();
const isLocal = cwd.includes('/Users/parthgulati');

if (!isLocal && fs.existsSync('index.html')) {
  try {
    fs.renameSync('index.html', 'index.source.html');
    console.log('[BUILD] Renamed root index.html to index.source.html to prevent Hostinger Nginx static override.');
  } catch (err) {
    console.error('[BUILD ERROR] Failed to rename index.html:', err);
  }
} else {
  console.log('[BUILD] Local environment detected or index.html already renamed. Skipping rename.');
}

// Load and execute server logic after the rename completes
import('./server.js');
