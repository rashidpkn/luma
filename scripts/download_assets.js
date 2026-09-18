import fs from 'fs';
import https from 'https';

const assetsToDownload = [
  { url: "https://speedy.io/videos/glocal.mp4", dest: "./public/videos/glocal.mp4" },
  { url: "https://speedy.io/videos/header_mobile.mp4", dest: "./public/videos/header_mobile.mp4" },
  { url: "https://speedy.io/imgs/app-qr-code.svg", dest: "./public/imgs/app-qr-code.svg" },
  { url: "https://speedy.io/imgs/speedy-certfications.svg", dest: "./public/imgs/speedy-certfications.svg" },
  { url: "https://speedy.io/_nuxt/fonts/helv-regular.ffddcfb.woff2", dest: "./public/fonts/helv-regular.woff2" },
  { url: "https://speedy.io/_nuxt/fonts/helv-bold.a759589.woff2", dest: "./public/fonts/helv-bold.woff2" },
  { url: "https://speedy.io/_nuxt/fonts/helv-hairline.5b4480a.woff2", dest: "./public/fonts/helv-hairline.woff2" },
  { url: "https://speedy.io/favicons/global.ico", dest: "./public/favicons/global.ico" }
];

// Ensure directories
['./public/videos', './public/imgs', './public/fonts', './public/favicons'].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

async function download(item) {
  return new Promise((resolve) => {
    https.get(item.url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(item.dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${item.url} -> ${item.dest} (${fs.statSync(item.dest).size} bytes)`);
          resolve(true);
        });
      } else {
        console.log(`Failed ${item.url}: status ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`Error ${item.url}: ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of assetsToDownload) {
    await download(item);
  }
}

run();
