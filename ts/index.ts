// const http = require('http');
// const { createServer } = require('http');
import { createServer } from 'http';
import User from './user';

const server = createServer();
server.on('request', (request, response) => {
  console.log(request);
  if (request.url === '/address' && request.method === 'POST') {
  }
  const klaus = new User('klaus', 'Müller');
  response.end(`Hello ${klaus.getFullName()}`);
});

server.listen(8080);
server.on('listening', () => console.log('listening to http://localhost:8080'));
