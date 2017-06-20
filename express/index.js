const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Client');
});
app.get('/user', (req, res) => {
  res.send('Hello User');
});
app.get('/user/:id', (req, res) => {
  res.send('Hello User' + req.params.id);
});

app.listen(8081, () => {
  console.log('listening');
});