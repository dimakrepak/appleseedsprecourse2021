'use strict'

const input = require('readline-sync');
var string = input.question('Write sentence:');

palindrome(string)
function palindrome(str) {

    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return console.log('PalliNNot');
        }
    }
    return console.log('Palindrome!!!');
}













// for (var i = 0; i < (string.length) / 2; i++) {
//     var pali = false
//     if (string[i] === string[string.length - 1 - i]) {
//         pali = true
//     }
// }
// if (pali === true) {
//     console.log('Palindrome!!!')
// } else {
//     console.log('PaliNottt!')
// }