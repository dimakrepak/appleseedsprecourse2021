'use strict'

const input = require('readline-sync');
var string = input.question('Write sentence');

for (var i = 0; i < string.length; i++) {
    string = string.replace(' ', '*')
}
console.log(string)