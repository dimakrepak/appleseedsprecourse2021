'use strict'
var num1 = +prompt('first number pls')
var num2 = +prompt('second number pls')
function makeTen() {
    if (num1 + num2 === 10) {
        console.log('Congrants 10')
    } else {
        console.log('Wrong !!!')
    }
}

makeTen()