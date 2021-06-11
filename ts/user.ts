class User {
  constructor(public firstname: string, public lastname: string) {}

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

export default User;

// module.exports = User; - old module system (CommonJS)
// export User; - new module system (ECMAScript Modules) - named exports => import {User} from './user.mjs';
// export default User; - default export => import User from './user.mjs';
