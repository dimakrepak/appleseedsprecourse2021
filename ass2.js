'use strict'

const chalk = require('chalk')
const input = require('readline-sync');
console.log('------<<<<', chalk.redBright('<<<<WELCOME TO WAR!!!!!'), '>>>>>------')

var username = input.question(chalk.magentaBright('Enter your name:\n'))
var currentBalance = 50

console.log('Hello', chalk.blueBright(username), 'you currently have', currentBalance, 'dollars!')

while (true) {

    var bet = Number(input.question('Place your bet for next round up to your current balance ($) : '))
    checBet(bet)

    if (checBet(bet) === false) {
        continue;
    }

    var userCard = getRandomIntInclusive(1, 12)
    var computerCard = getRandomIntInclusive(1, 12)

    if (userCard > computerCard) {
        console.log(chalk.magentaBright('You won this round!!!'))
        console.log('Your card is', userCard, 'my card is', computerCard)
        currentBalance += bet
        console.log('You added to your balance', bet, 'dollar!!')
        console.log(chalk.yellowBright('Your current balance is', currentBalance, 'dollar'))

    }

    if (computerCard > userCard) {
        console.log(chalk.cyanBright('I won this round!!!!'))
        console.log('Your card is', userCard, 'my card is', computerCard)
        currentBalance -= bet
        console.log('You lost', bet, 'dollar!!!')
        console.log(chalk.yellowBright('Your current balance is', currentBalance, 'dollar'))
        if (currentBalance === 0) {
            console.log('Your balance is empty. Come back next time!')
            break;
        }
    }
    var answers = ['Play another round', 'Leave with my money!']
    var index = input.keyInSelect(answers, 'What would you like to do?')
    console.log('No problem!!', answers[index])
    if (answers[index] === 'Play another round') {
        console.log(chalk.greenBright('LETS GO!!!!'))
        continue;
    }
    console.log(chalk.greenBright('See you next time!'))
    break;
}








function checBet(betNum) {
    if (betNum > currentBalance) {
        console.log('This bet to big for you\nStart over')
        return false
    } else if (betNum < 1) {
        console.log('You are greedy!Bet some dollars\nStart over')
        return false
    } else {
        return betNum
    }
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}