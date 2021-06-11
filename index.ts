import express from 'express';
import addressRouter from './addresses';
import middlewareSetup from './middlewareSetup';
import { sign } from 'jsonwebtoken';
import jwt from 'express-jwt';

const app = express();

middlewareSetup(app);
app.use(
  '/address',
  jwt({ secret: 'shhhhh', algorithms: ['HS256'] }),
  addressRouter,
);

// app.get('/address', (request, response) => {
//   response.json({
//     id: 1,
//     firstname: 'Klaus',
//     lastname: 'müller',
//     email: 'klaus@mueller.com',
//   });
// });

app.post('/login', (req, res) => {
  if (req.body.username === 'admin' && req.body.password === 'secret') {
    res.json({ token: sign({ username: 'admin', id: 1 }, 'shhhhh') });
  }
});

app.listen(8080, () =>
  console.log('Server is running on http://localhost:8080'),
);
