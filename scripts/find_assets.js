import fs from 'fs';

const html = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_clean.html", "utf-8");
const css = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_styles.css", "utf-8");

const urls = new Set();

// Extract from html: src, href, data-src, etc.
const htmlUrls = [...html.matchAll(/(src|data-src|href)="([^"]+)"/g)];
htmlUrls.forEach(m => {
  const u = m[2];
  if (u.includes('.png') || u.includes('.jpg') || u.includes('.svg') || u.includes('.mp4') || u.includes('.mp3') || u.includes('.woff') || u.includes('.woff2')) {
    urls.add(u);
  }
});

// Extract from css: url(...)
const cssUrls = [...css.matchAll(/url\(([^)]+)\)/g)];
cssUrls.forEach(m => {
  const u = m[1].replace(/['"]/g, '');
  urls.add(u);
});

console.log("Found assets:");
const list = [...urls];
list.sort();
list.forEach(u => console.log(u));

fs.writeFileSync("./scripts/assets_list.json", JSON.stringify(list, null, 2));
