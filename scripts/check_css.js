import fs from 'fs';

const css = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_styles.css", "utf-8");

// Check @font-face
const fontFaces = [...css.matchAll(/@font-face\s*\{[^}]+\}/g)].map(m => m[0]);
console.log("Font faces:", fontFaces);

// Check :root or variables
const rootMatches = [...css.matchAll(/:root\s*\{[^}]+\}/g)].map(m => m[0]);
console.log(":root variables:", rootMatches);

// Check keyframes
const keyframeMatches = [...css.matchAll(/@keyframes\s+([a-zA-Z0-9_-]+)/g)].map(m => m[1]);
console.log("Keyframes:", keyframeMatches);
