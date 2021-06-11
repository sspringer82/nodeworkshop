import express from 'express';

const app = express();

app.use((request, response, next) => {
  console.log('middleware');

  next();
});

app.use((request, response, next) => {
  console.log('middleware1');

  next();
});

app.get('/address', (request, response) => {
  console.log('routing');
  response.json({
    id: 1,
    firstname: 'klaus',
    lastname: 'müller',
    email: 'klaus@mueller.com',
  });
});

app.listen(8080, () =>
  console.log('Server is running on http://localhost:8080'),
);
