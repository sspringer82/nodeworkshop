const http = require('http');
const fs = require('fs');
const promisify = require('util').promisify;

const readFile = promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  try {
    const content = await readFile('index.html', 'utf-8');
    res.end(content);
  } catch(e) {
      res.statusCode = 500;
      res.end('');
      console.log(e);
  }
});

server.listen(8081, () => {
  console.log('server is listening');
});