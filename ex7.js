'use strict'
const input = require('readline-sync');
let num = Number(input.question('Lets get factorial enter number:'));
if (isNaN(num) === true) {
    console.log('Enter number pls')
} else {

    let mult = 1
    let count = 1
    while (count <= num) {
        mult = mult * count
        count++
    }
    console.log(mult)
}
