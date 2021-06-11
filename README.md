# Hello

Who are you?

What is your experice with javascript?

What is your experice with node?

What are your expectations for today?

- Hands on & refresh knowledge
- Deno
- TypeScript
- new stuff

# Init

- README.md: Info about project, getting started, contribution guides
- .gitignore: at least node_modules
- On the command line in your procject folder type: `npm init -y`
- In your project folder type `npm install express` to install the express package
- For an existing Application (newly cloned), type `npm install` to install all the dependencies
- Run it: `node index.mjs`

# Modules

- core modules: `const http = require('http');`
  - `import http from 'http';`
- node modules (npm): `const express = require('express');`;
  - `import express from 'express';`
- own modules (files): `const user = require('./user')`; => ./user.js
  - `import user from 'user';`

# TypeScript

- `npm install typescript`
- `npx tsc --init` => tsconfig.json

# Links

- Node: https://nodejs.org/
- NVM: https://github.com/nvm-sh/nvm
- NPM: https://www.npmjs.com/
- NPM structure: https://docs.npmjs.com/cli/v7/configuring-npm/package-json
- Express: https://expressjs.com/
- Styleguides:
  - https://github.com/airbnb/javascript
  - https://standardjs.com/
  - https://google.github.io/styleguide/jsguide.html
- Eslint: https://eslint.org/
- Pre commit hook support: https://github.com/typicode/husky
