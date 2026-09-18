import fs from 'fs';

let css = fs.readFileSync("/Users/rashid/.gemini/antigravity-ide/brain/b23a7073-d1dd-4d7e-9773-afc9d6fe5c93/scratch/speedy_styles.css", "utf-8");

// Replace font URLs
css = css.replace(/url\(\/_nuxt\/fonts\/helv-regular\.[^)]+\)/g, "url(/fonts/helv-regular.woff2)");
css = css.replace(/url\(\/_nuxt\/fonts\/helv-bold\.[^)]+\)/g, "url(/fonts/helv-bold.woff2)");
css = css.replace(/url\(\/_nuxt\/fonts\/helv-hairline\.[^)]+\)/g, "url(/fonts/helv-hairline.woff2)");

// Remove redundant font url count
css = css.replace(/@import url\(\/\/hello\.myfonts\.net\/count\/3e41e5\);/g, "");

// Ensure cursor pointer and proper defaults
const customFixes = `
@import "tailwindcss";

/* Smooth scrolling setup */
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
.lenis.lenis-smooth iframe {
  pointer-events: none;
}

/* Custom scrollbar hide for horizontal scrollers */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Additional enhancements */
body {
  overflow-x: hidden;
  background-color: #000;
}
`;

const finalCss = customFixes + "\n" + css;
fs.writeFileSync("./src/index.css", finalCss);
console.log("Updated src/index.css successfully! Length:", finalCss.length);
