import fs from 'fs';

const lottie = JSON.parse(fs.readFileSync('./public/lotties/Features/data.json', 'utf-8'));
console.log("Lottie name:", lottie.nm, "version:", lottie.v, "fps:", lottie.fr, "inPoint:", lottie.ip, "outPoint:", lottie.op);
console.log("Assets count:", lottie.assets ? lottie.assets.length : 0);
if (lottie.assets) {
  lottie.assets.forEach(a => {
    if (a.p) {
      console.log(`Asset id=${a.id}, p=${a.p}, u=${a.u}`);
    }
  });
}
