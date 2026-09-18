import fs from 'fs';

const html = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_clean.html", "utf-8");

const scriptTags = [...html.matchAll(/<script[^>]*src="([^"]*)"[^>]*>/g)].map(m => m[1]);
console.log("Script src URLs:", scriptTags);

const preloads = [...html.matchAll(/<link[^>]*rel="preload"[^>]*href="([^"]*)"[^>]*as="script"[^>]*>/g)].map(m => m[1]);
console.log("Preload script URLs:", preloads);
