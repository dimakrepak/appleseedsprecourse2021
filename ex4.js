'use strict'

const input = require('readline-sync');
let numOfPeople = Number(input.question('How many people are you going with?(0-10):'));
if (numOfPeople > 10) {
    console.log('Between 0-10')
} else if (numOfPeople <= 0) {
    console.log('I cant see humans!!')
} else {
    let kosher = input.question('Should it be Kosher?(yes/no):');
    if (kosher === 'yes') {
        var kashrut = input.question('Should it be Kashrut Lemehadrin?(yes/no):');
    }

    let readlineSync = require('readline-sync'),
        foodtype = ['Mexican', 'Italian', 'Pizza', 'Sweat'],
        index = readlineSync.keyInSelect(foodtype, 'Which kind of food?');
    let kindOfFood = foodtype[index]
    console.log('Good choice!');

    if ((numOfPeople < 5) && (kosher === 'no') && (kindOfFood === ('Italian' || 'Pizza'))) {
        console.log('Go to the marreponi')
    } else if ((kosher === 'no') && (numOfPeople > 5) && (kindOfFood === ('Italian' || 'Pizza'))) {
        console.log('Go to zaza')
    } else if ((numOfPeople > 0) && (kosher === 'yes') && (kashrut === 'no') && (kindOfFood === ('Italian' || 'Pizza'))) {
        console.log('Go to plaza')
    } else if ((numOfPeople > 0) && (kosher === 'yes') && (kashrut === 'yes') && (kindOfFood === ('Italian' || 'Pizza'))) {
        console.log('Go to Italikosher')

    } else if ((numOfPeople < 5) && (kosher === 'no') && (kindOfFood === 'Mexican')) {
        console.log('Go to mexicana')
    } else if ((numOfPeople > 5) && (kosher === 'no') && (kindOfFood === 'Mexican')) {
        console.log('Go to spicy')
    } else if ((numOfPeople < 5) && (kosher === 'yes') && (kashrut === 'no') && (kindOfFood === 'Mexican')) {
        console.log('Go to chacha')
    } else if ((numOfPeople > 5) && (kosher === 'yes') && (kashrut === 'no') && (kindOfFood === 'Mexican')) {
        console.log('Go to burito')
    } else if ((numOfPeople > 0) && (kosher === 'yes') && (kashrut === 'yes') && (kindOfFood === 'Mexican')) {
        console.log('Go to hola')

    } else if ((numOfPeople > 0) && (kosher === 'no') && (kindOfFood === 'Sweat')) {
        console.log('Go to sweaty')
    } else if ((numOfPeople > 0) && (kosher === 'yes') && (kashrut === 'no') && (kindOfFood === 'Sweat')) {
        console.log('Go to delicream')
    } else if ((numOfPeople > 0) && (kosher === 'yes') && (kashrut === 'yes') && (kindOfFood === 'Sweat')) {
        console.log('Go to GlidabyAvi')
    }
}






