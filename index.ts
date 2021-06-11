import express, { Express } from 'express';
import morgan from 'morgan';
import setUpLogger from './logger';

const app = express();

// setUpLogger(app, setUpMorgan);
// setUpLogger(app, setUpCustomLogger);
// setUpLogger(app, (app: Express) => {
//   app.use(morgan('combined'));
// });
setUpLogger(app);

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
