function getTasks() {
    const taskCount = 4;
    const level = 1;

    const operations = [ '+', '-', '*', '/'];

    const tasks = [];

    operations.forEach(operation => {
        for (var i = 0; i < taskCount; i++) {
            tasks.push(createOperation(operation, level));
        }
    });

    return tasks;
}

function createOperation(operation, level) {
    const result = {
        operation: operation,
        operand1: 0,
        operand2: 0,
        result: 0,
        userInput: null
    };
    [result.operand1, result.operand2] = createOperands(operation, level);

    switch(operation) {
        case '+':
            result.result = result.operand1 + result.operand2;
            break;
        case '-':
            result.result = result.operand1 - result.operand2;
            break;
        case '*':
            result.result = result.operand1 * result.operand2;
            break;
        case '/':
            result.result = result.operand1 / result.operand2;
            break;
    }

    return result;
}

function createOperands(operation, level) {
    let operands;
    switch (level) {
        case 1:
            operands = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ];
            break;
        case 2:
            const result = [
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 10)
            ];
            if (new Date().getTime() % 2 === 0) {
                result.reverse();
            }
            operands = result;
            break;
        case 3:
            operands = [
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100)
            ];
            break;
    }
    if (operation === '/') {
        operands[0] = operands[0] * operands[1];
    }
    return operands;
}

module.exports = getTasks;