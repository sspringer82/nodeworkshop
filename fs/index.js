const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readFromFile() {
  try {
    const content = await readFile('input22.txt', 'utf-8');

    console.log('async content', content);

    return 'foo';
  } catch (e) {
    console.log(e);
  }
}

const result = readFromFile().then(result => {
  console.log(result);

}).catch((e) => {
  console.log(e);
})

