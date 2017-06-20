const http = require('http');

const server = http.createServer((req, res) => {
  res.end('foo');
});

/*
server.on('request', (req, res) => {
  res.end('foo');
});
*/

/*
const fs = require('fs');
fs.readFile
*/

server.listen(8081, () => {
  console.log('server is listening');
});