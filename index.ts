import express from 'express';
import { appendFile, createWriteStream } from 'fs';
import morgan from 'morgan';
import { join } from 'path';

const app = express();

const accessLogStream = createWriteStream(join(__dirname, 'access.log'), {
  flags: 'a',
});
app.use(morgan('combined', { stream: accessLogStream }));

app.use((request, response, next) => {
  const now = new Date();
  const url = request.url;
  const method = request.method;

  const logMessage = `${now} - ${method} - ${url}`;

  appendFile('access2.log', logMessage, (err) => {
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
