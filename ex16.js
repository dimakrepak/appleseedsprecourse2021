'use strict'

var arr = [1, 2, 3,]

var reversed = reverse(arr)
console.log(reversed)

function reverse(array) {
    for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
        var first = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = first
    }
    return (array)
}