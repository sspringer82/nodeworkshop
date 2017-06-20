const config = require('./conf');
const express = require('express');
const logger = require('./logger');
const Router = require('./router');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

logger(app);

const router = new Router(app);
router.initRoutes();

app.listen(config.port, () => {
  console.log('listening');
});