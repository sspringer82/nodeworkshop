// const http = require('http');
// const { createServer } = require('http');
import { createServer } from 'http';
import User from './user';

const server = createServer((request, response) => {
  const klaus = new User('klaus', 'Müller');
  response.end(`Hello ${klaus.getFullName()}`);
});

server.listen(8080, () => console.log('listening to http://localhost:8080'));
