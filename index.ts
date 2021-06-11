import express from 'express';
import middlewareSetup from './middlewareSetup';

const app = express();

middlewareSetup(app);

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
