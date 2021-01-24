'use strict'

const input = require('readline-sync');
const figlet = require('figlet');
var username = input.question('Your username to Enter a game:\n');

figlet(('WELCOME\nTO\nHANGMAN!!!\n' + username), function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


var words = ['APPLESEEDS', 'JAVASCRIPT', 'NODEJS', 'LOOPS'];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_'
}

var remainingLetters = word.length
var remainingLifes = 10

while (remainingLetters > 0 && remainingLifes > 0) {


    console.log(answerArray.join(' '))

    console.log('Lifes:', remainingLifes)

    var guess = input.question('Guess a letter:\n');
    guess = guess.toUpperCase()

    if (guess.length !== 1) {
        console.log('Enter a single letter');
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === '_') {
                answerArray[j] = guess
                remainingLetters--
                //stucked with remaining lifes
            }
        }
    }
}
console.log(answerArray.join(''))
console.log('The word is', word)





