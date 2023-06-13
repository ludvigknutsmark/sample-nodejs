import express from 'express';
const app = express();
app.use(express.json())
app.use(express.static('public'))
const port = 8080;

app.get('/', (req, res) => {
  console.log("Request data:", req);
  
  res.send("test leakage")
})

app.listen(port, '0.0.0.0', () => {
  return console.log(`Express is listening at http://${port}`);
});
