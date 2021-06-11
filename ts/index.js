"use strict";
exports.__esModule = true;
// const http = require('http');
// const { createServer } = require('http');
var http_1 = require("http");
var user_1 = require("./user");
var server = http_1.createServer(function (request, response) {
    var klaus = new user_1["default"]('klaus', 'Müller');
    response.end("Hello " + klaus.getFullName());
});
server.listen(8080, function () { return console.log('listening to http://localhost:8080'); });
