import express from 'express';

const app = express();

app.use((request, response, next) => {
  const now = new Date();
  const url = request.url;
  const method = request.method;

  console.log(`${now} - ${method} - ${url}`);

  next();
});

app.get('/address', (request, response) => {
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
