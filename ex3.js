'use strict'

const input = require('readline-sync');
let userNum = input.question("number from 0-9 pls:");
if (userNum >= 10) {
    console.log('number between 0 to 9!!!!')
}
let wordNums = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eihght', 'Nine',]
let word = wordNums[userNum]
console.log(word)