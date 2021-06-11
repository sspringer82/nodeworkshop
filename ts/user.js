"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return User;
}());
exports["default"] = User;
// module.exports = User; - old module system (CommonJS)
// export User; - new module system (ECMAScript Modules) - named exports => import {User} from './user.mjs';
// export default User; - default export => import User from './user.mjs';
