import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import setUpLogger from './logger';

export default function (app: Express): void {
  // setUpLogger(app, setUpMorgan);
  // setUpLogger(app, setUpCustomLogger);
  // setUpLogger(app, (app: Express) => {
  //   app.use(morgan('combined'));
  // });
  setUpLogger(app);
  app.use(cors());
  app.use(helmet());
  app.use(express.static('public'));
}
