import fs from 'fs';

const html = fs.readFileSync("./scripts/section_3_js-locomotive.html", "utf-8");

// Search for lottie or animation references
console.log("Canvas in html:", [...html.matchAll(/<canvas[^>]*>/g)].map(m => m[0]));
console.log("SVGs in animation container:", [...html.matchAll(/class="animation-container"[^>]*>([\s\S]*?)<\/div>/g)].map(m => m[0]));

// Let's check payload.js for "cards" or "animation"
const payload = fs.readFileSync("./scripts/payload.js", "utf-8");
const matches = [...payload.matchAll(/"([^"]*(?:card|anim|lottie|globe|video|image|banner)[^"]*)"/gi)].map(m => m[1]);
console.log("Matches in payload.js (first 40 unique):", [...new Set(matches)].slice(0, 40));
