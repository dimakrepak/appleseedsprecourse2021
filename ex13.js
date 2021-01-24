'use strict'

const input = require('readline-sync');
var string = input.question('Write sentence:');

var strSplit = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()0-9]/g,"").split(' ')
// console.log(strSplit)
var longestWord = 0
var word = null
for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
        longestWord = strSplit[i].length
        word = strSplit[i]
    }
}
console.log(word)
