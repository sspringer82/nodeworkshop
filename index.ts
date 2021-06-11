import express from 'express';
import { appendFile } from 'fs';

const app = express();

app.use((request, response, next) => {
  const now = new Date();
  const url = request.url;
  const method = request.method;

  const logMessage = `${now} - ${method} - ${url}`;

  appendFile('access.log', logMessage, (err) => {
    console.log('Error: ', err);
    if (err) throw err;
    console.log(logMessage);
  });

  next();
});

app.get('/address', (request, response) => {
  response.json({
    id: 1,
    firstname: 'Klaus',
    lastname: 'müller',
    email: 'klaus@mueller.com',
  });
});

app.listen(8080, () =>
  console.log('Server is running on http://localhost:8080'),
);
