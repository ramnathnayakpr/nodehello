const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send(`<html><body><h1>Buongiorno from container ${process.env.HOSTNAME} </h1></body></html>\n`);
});

app.listen(80);
console.log(`Running on port 80`);
