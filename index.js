#!/usr/bin/env node
const getInput = require('./input');
const clearConsole = require('./clear')

let alive = 'True';
let good = 'True';

clearConsole();
console.log('******************');
console.log('*** Willoughby ***');
console.log('******************');

async function main() {
    console.log('\n')
    console.log('Choices are not always what they seem...')
    console.log('\n')

    console.log(`
    You hear a knock at your door.
    It's 1AM and aren't expecting anyone.
    You wait, hoping they leave.
    `)

    await getInput('')

    console.log(`
    But then, another knock. This time harder.
    The discomfort increases, and you try hard to remain still.
    `)

    await getInput('')

    console.log(`
    "Please, help me..."
    The voice sounds frail, yet distorted.
    Maybe it's the lady across the hall.
    She's been quite sick lately.
    `)
}

main();


// ASK THE PLAYER IF YOU ANSWER OR NOT

//console.log('First, character basics:');

async function gatherCharacterBasics() {
  const name = await getInput('What is your name? ');
  const age = await getInput('What is your age? ');
  const gender = await getInput('What is your gender? ');
  const race = await getInput('What is your race? ');

  console.log(`Nice to meet you, ${name}. Let's begin...`);
  // Continue with the rest of your program
}

//gatherCharacterBasics();
