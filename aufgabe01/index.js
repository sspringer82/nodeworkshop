const readline = require('readline');
const tasks = require('./tasks');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(mathTasks, index) {

    const operation = mathTasks[index];
    const question = operation.operand1 + ' ' + operation.operation + ' ' + operation.operand2 + ' = ';

    rl.question(question, (answer) => {
        operation.userInput = parseInt(answer, 10);
        if (operation.userInput === operation.result) {
            console.log('correct');
        } else {
            console.log('wrong');
        }
        if (index + 1 < mathTasks.length) {
            ask(mathTasks, index + 1);
        } else {
            const correct = mathTasks.reduce((prev, cur) => {
                return prev += cur.result === cur.userInput ? 1 : 0
            }, 0);

            console.log('correct ' + correct + ' of ' + mathTasks.length);
            rl.close();
        }
    });
}

ask(tasks(), 0);
