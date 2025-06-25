function calculator(input1, input2, operation) {
    if (operation == 'Addition') {
        return input1 + input2;
    } else if (operation == 'Multiplication') {
        return input1 * input2
    } else if (operation == 'Division') {
        return input1 / input2;
    } else {
        console.log('Error')
    }
}

console.log(calculator(2, 3, 'Division'))