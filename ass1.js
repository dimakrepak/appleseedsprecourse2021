'use strict'

const input = require('readline-sync');
console.log('Welcome to the Quiz');

let username = input.question("What's your Name: \n");
console.log('Hello ' + username + ", Let's Play which Harry Potter character you are Quiz!!");
console.log('***Question 1!!!***')


let readlineSync = require('readline-sync'),
    question = ['time', 'confidence', 'patience', 'money'],
    index = readlineSync.keyInSelect(question, 'Whats something you wish you had more of:');
var answer1 = question[index]

console.log('****Question 2!!!****')

readlineSync,
    question = ['The marauders map', 'Cloak of invisibillity', 'The mirror of erised', 'Time turner'],
    index = readlineSync.keyInSelect(question, 'Which magical item would you love to have:');
var answer2 = question[index]

console.log('*****Question 3!!!*****')

readlineSync,
    question = ['I avoid it all costs', 'I confront it head on', 'I ignore it unless its something pressing', 'I approach it passively'],
    index = readlineSync.keyInSelect(question, 'How do you typically handle conflict:');
var answer3 = question[index]

console.log('******Question 4******!!!')

readlineSync,
    question = ['Spending time with friends', 'Gardering', 'Reading a new book', 'Hiking'],
    index = readlineSync.keyInSelect(question, 'You prefer to spend your weekends:');
var answer4 = question[index]

console.log('*******Question 5!!!*******')

readlineSync,
    question = ['Fall', 'Summer', 'Winter', 'Spring'],
    index = readlineSync.keyInSelect(question, 'Which season matches your personality:');
var answer5 = question[index]

if (answer1 === 'time' && answer2 === 'Cloak of invisibillity' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Sirius Black!!\n You are restless, fun, and highly opinionated')
}
if (answer1 === 'confidence' && answer2 === 'Cloak of invisibillity' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Minerva McGonagall!!\n You are stern, loyal, and protective')
}
if (answer1 === 'patience' && answer2 === 'Cloak of invisibillity' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Albus Dumbledore!!\n You are wise, gentle, kind, misterious in way, knowlegable, caring and understanding')
}
if (answer1 === 'money' && answer2 === 'Cloak of invisibillity' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Dudley Dursley!!\n You are entitled, rude and generally behave like the atrocious spoilt brat')
}
if (answer1 === 'time' && answer2 === 'The marauders map' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Sirius Black!!\n You are restless, fun, and highly opinionated')
}
if (answer1 === 'confidence' && answer2 === 'Cloak of invisibillity' && answer3 === 'I approach it passively' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Nymphadora Tonks!!\n You are funny, feisty, and clumsy')
}
if (answer1 === 'patience' && answer2 === 'Cloak of invisibillity' && answer3 === 'I approach it passively' &&
    answer4 === 'Spending time with friends' && answer5 === 'Summer') {
    console.log('Congrats you are Nymphadora Tonks!!\n You are funny, feisty, and clumsy')
}
if (answer1 === 'time' && answer2 === 'Cloak of invisibillity' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Spring') {
    console.log('Congrats you are Hagrid!!\n You are accepting, grateful, nurturing')
}
if (answer1 === 'patience' && answer2 === 'Cloak of invisibillity' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Hiking' && answer5 === 'Summer') {
    console.log('Congrats you are Hagrid!!\n You are accepting, grateful, nurturing')
}
if (answer1 === 'time' && answer2 === 'Cloak of invisibillity' && answer3 === 'I avoid it all costs' &&
    answer4 === 'Gardering' && answer5 === 'Fall') {
    console.log('Congrats you are George Weasley!!\n You are loyal, rebellios')
}
if (answer1 === 'money' && answer2 === 'Time turner' && answer3 === 'I avoid it all costs' &&
    answer4 === 'Gardering' && answer5 === 'Winter') {
    console.log('Congrats you are George Weasley!!\n You are loyal, rebellios')
}
if (answer1 === 'time' && answer2 === 'Cloak of invisibillity' && answer3 === 'I confront it head on' &&
    answer4 === 'Gardering' && answer5 === 'Fall') {
    console.log('Congrats you are Argus Filch!!\n You are very foul-tempered, cantankerous, and easily annoyed')
}
if (answer1 === 'money' && answer2 === 'Cloak of invisibillity' && answer3 === 'I confront it head on' &&
    answer4 === 'Gardering' && answer5 === 'Fall') {
    console.log('Congrats you are Argus Filch!!\n You are very foul-tempered, cantankerous, and easily annoyed')
}
if (answer1 === 'patience' && answer2 === 'The marauders map' && answer3 === 'I avoid it all costs' &&
    answer4 === 'Gardering' && answer5 === 'Spring') {
    console.log('Congrats you are Fred Weasley!!\n You are outgoing and goofy, but protective')
}
if (answer1 === 'time' && answer2 === 'Cloak of invisibillity' && answer3 === 'I avoid it all costs' &&
    answer4 === 'Gardering' && answer5 === 'Fall') {
    console.log('Congrats you are George Weasley!!\n You are loyal, rebellios')
}
if (answer1 === 'confidence' && answer2 === 'The mirror of erised' && answer3 === 'I approach it passively' &&
    answer4 === 'Reading a new book' && answer5 === 'Winter') {
    console.log('Congrats you are Hermione Granger!!\n You are smart, logical, levelheaded')
}
if (answer1 === 'confidence' && answer2 === 'Time turner' && answer3 === 'I approach it passively' &&
    answer4 === 'Reading a new book' && answer5 === 'Winter') {
    console.log('Congrats you are Hermione Granger!!\n You are smart, logical, levelheaded')
}
if (answer1 === 'confidence' && answer2 === 'The mirror of erised' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Spending time with friends' && answer5 === 'Fall') {
    console.log('Congrats you are Harry Potter !!\n You are more of an introvert, preferring to mull things over in private than air them out loud')
}
if (answer1 === 'money' && answer2 === 'Time turner' && answer3 === 'I approach it passively' &&
    answer4 === 'Hiking' && answer5 === 'Spring') {
    console.log('Congrats you are Bellatrix Lestrange !!\n You are intensely sadistic witch with primitive, animalistic tendencies')
}
if (answer1 === 'time' && answer2 === 'The marauders map' && answer3 === 'I avoid it all costs' &&
    answer4 === 'Spending time with friends' && answer5 === 'Fall') {
    console.log('Congrats you are Remus Lupin !!\n You are compassionate, intelligent, tolerant, levelheaded, peaceful, selfless, brave, kind, and good-natured')
}
if (answer1 === 'confidence' && answer2 === 'Cloak of invisibillity' && answer3 === 'I confront it head on' &&
    answer4 === 'Gardering' && answer5 === 'Summer') {
    console.log('Congrats you are Molly Weasley !!\n You are strict, but extremely kind-hearted and loving')
}
if (answer1 === 'patience' && answer2 === 'The mirror of erised' && answer3 === 'I ignore it unless its something pressing' &&
    answer4 === 'Reading a new book' && answer5 === 'Winter') {
    console.log('Congrats you are Ginny Weasley !!\n You are forceful, independent and often speak your mind')
}

