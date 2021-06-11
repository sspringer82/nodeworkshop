import { appendFile, createWriteStream } from 'fs';
import morgan from 'morgan';
import { join } from 'path';
import { Express } from 'express';

type LoggerFunction = (app: Express) => void;

export default function setUpLogger(
  app: Express,
  loggerFn: LoggerFunction = setUpMorgan,
): void {
  loggerFn(app);
}
export function setUpCustomLogger(app: Express) {
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
}

export function setUpMorgan(app: Express) {
  const accessLogStream = createWriteStream(join(__dirname, 'access.log'), {
    flags: 'a',
  });
  app.use(morgan('combined', { stream: accessLogStream }));
}
