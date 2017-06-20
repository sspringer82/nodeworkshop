const controller = require('./controller');

class Router {
  constructor(app) {
    this.app = app;
  }

  initRoutes() {
    this.app.get('/user', controller.getUser);
    this.app.get('/hello/:name', controller.sayHello);
  }
}

module.exports = Router;