const model = require('./model');

const controller = {
  getUser(req, res) {
    const data = model;
    res.send(data);
  }
}

module.exports = controller;
