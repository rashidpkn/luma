import https from 'https';
import fs from 'fs';

const lottieUrls = [
  "https://speedy.io/lotties/Features/data.json",
  "https://speedy.io/lotties/Features_BR/data.json",
  "https://speedy.io/lotties/Features_PL/data.json"
];

if (!fs.existsSync('./public/lotties/Features')) fs.mkdirSync('./public/lotties/Features', { recursive: true });

async function downloadLottie(url, dest) {
  return new Promise(resolve => {
    https.get(url, (res) => {
      console.log(`${url} -> status ${res.statusCode}`);
      if (res.statusCode === 200) {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
          fs.writeFileSync(dest, data);
          console.log(`Saved ${dest} (${data.length} bytes)`);
          resolve(true);
        });
      } else {
        resolve(false);
      }
    });
  });
}

await downloadLottie("https://speedy.io/lotties/Features/data.json", "./public/lotties/Features/data.json");
