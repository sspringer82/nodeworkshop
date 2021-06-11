// const http = require('http');
// const { createServer } = require('http');
import http from 'http';
import { createServer } from 'http';
import User from './user.mjs';

const server = http.createServer((request, response) => {
  const klaus = new User('klaus', 'Müller');
  response.end(`Hello ${klaus.getFullName()}`);
});

server.listen(8080, () => console.log('listening to http://localhost:8080'));
