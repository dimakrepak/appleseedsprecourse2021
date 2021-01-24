'use strict'


const input = require('readline-sync');
let num = Number(input.question('We will check all prime numbers up to NUMBER you will ENTER:'));

if (isNaN(num) === true) {
    console.log('Enter number pls')
} else {
    for (var i = 1; i < num; i++) {
        var notPrime = false;
        for (var y = 2; y <= (i - 1); y++) {
            // console.log(y)
            if (i % y === 0) {
                notPrime = true
            }
        }
        if (notPrime === false) {
            console.log(i)
        }
    }
}
