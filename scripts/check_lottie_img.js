import https from 'https';

https.get("https://speedy.io/lotties/Features/images/img_0.png", (res) => {
  console.log("img_0.png status:", res.statusCode, "type:", res.headers['content-type'], "length:", res.headers['content-length']);
});
