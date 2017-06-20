const model = require('./model');

const controller = {
  getUser(req, res) {
    const data = model;
    //res.send(data);
    res.render('hello');
  },
  sayHello(req, res) {
    const name = req.params.name;
    res.render('hello', {name: name});
  }
}

module.exports = controller;
