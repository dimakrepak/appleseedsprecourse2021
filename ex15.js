'use strict'


var arr1 = ['Hello', 'World']
var arr2 = ['Sumflower']

var newArr = contactAct(arr1, arr2)
console.log(newArr) 



function contactAct(array1, array2) {
    for (var i = 0; i < array2.length; i++) {
        array1.push(array2[i])
    }
    return (array1)
}