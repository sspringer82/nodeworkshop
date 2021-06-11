import express from 'express';

const app = express();

app.get('/address', (request, response) => {
  response.json({
    id: 1,
    firstname: 'klaus',
    lastname: 'müller',
    email: 'klaus@mueller.com',
  });
});

app.listen(8080);
