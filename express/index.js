const config = require('./conf');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const data = 'Hello Client';
  res.send(data);
});


app.listen(config.port, () => {
  console.log('listening');
});