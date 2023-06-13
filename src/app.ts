import express from 'express';
const app = express();
app.use(express.json())
app.use(express.static('public'))
const port = 8080;

app.get('/', (req, res) => {
  let headers = req.headers;

  console.log("===Headers===")
  for (var h in headers) {
    console.log(h,":",headers[h])
  }
  console.log("=============")
  console.log("IP Address:", req.socket.remoteAddress);
  console.log("=============")
  console.log("Req origin:", req.origin);

  res.send("test leakage")
})

app.listen(port, '0.0.0.0', () => {
  return console.log(`Express is listening at http://${port}`);
});
