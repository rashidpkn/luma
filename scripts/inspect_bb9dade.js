import fs from 'fs';

const content = fs.readFileSync('./scripts/chunks/bb9dade.js', 'utf-8');

// search for cardsAnimation or block-save-time in bb9dade.js
const idx = content.indexOf('cardsAnimation');
if (idx !== -1) {
  console.log("Found cardsAnimation at", idx);
  console.log(content.substring(Math.max(0, idx - 200), Math.min(content.length, idx + 1500)));
}

// Search for gsap, ScrollTrigger, Timeline
const gsapIdx = content.indexOf('ScrollTrigger');
if (gsapIdx !== -1) {
  console.log("Found ScrollTrigger at", gsapIdx);
  console.log(content.substring(Math.max(0, gsapIdx - 100), Math.min(content.length, gsapIdx + 500)));
} else {
  console.log("ScrollTrigger not directly named or minified in bb9dade.js");
}
