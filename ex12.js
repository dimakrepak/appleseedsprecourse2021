'use strict'

const input = require('readline-sync');
var string = input.question('Write sentence:');

var newStr = ''

for (var i = 0; i < string.length; i++) {
     
    if  ((string.charAt(i) === 'a') || 
        (string.charAt(i) === 'e')  || 
        (string.charAt(i) === 'i')  || 
        (string.charAt(i) === 'o')  || 
        (string.charAt(i) === 'u')) {

        newStr = (newStr + string.charAt(i).toUpperCase())
    } else {
        newStr = (newStr + string.charAt(i))
        
    }
}
console.log(newStr)
