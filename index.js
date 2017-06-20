// module.exports

// require

/*
const User = require('./user').User;
const sayHello = require('./user').sayHello;
*/

/*
const user = require('./user');

user.User => Klasse
user.sayHello => Function
*/

const {User, sayHello} = require('./user');

const klaus = new User('Klaus', 'Müller');
console.log(klaus.getFullname());

sayHello('Maria');