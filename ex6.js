'use strict'
const input = require('readline-sync');

while (true) {
    let num = Number(input.question('Enter number bigger than 10:'));
    if (num < 10) {
        let num = Number(input.question('Enter number bigger than 10:'))
    } else {
        console.log('good')
        break;
        
    }
}