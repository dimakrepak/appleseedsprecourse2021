'use strict'

const input = require('readline-sync');
var arrayLength = Number(input.question('Place a number to set array length:\n'));

var myArray = []

for (var i = 0; i < arrayLength; i++) {
    myArray.push(getRandomIntInclusive(1, 50))
}
console.log(myArray)

minMax(myArray)
function minMax(array) {
    var min = Math.min(...array)
    console.log('min number in array is', min)

    var max = Math.max(...array)
    console.log('max number in array is', max)
}









function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}