import https from 'https';
import fs from 'fs';

https.get("https://speedy.io/_nuxt/static/1784720985/payload.js", (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync("./scripts/payload.js", data);
    console.log("Downloaded payload.js, length:", data.length);
  });
});
