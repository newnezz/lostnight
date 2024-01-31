#!/usr/bin/env node
const getInput = require('./input');
const clearConsole = require('./clear')

let alive = true;
let good = 5;

clearConsole();
console.log('******************');
console.log('*** Willoughby ***');
console.log('******************');

async function main() {
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

    // First Choice
    let answer;
    while (answer !== 'y' && answer != 'n') {
        answer = await getInput('Answer the door? (y / n)')
    }
    switch (answer) {
        case 'y':
            console.log(`You answer the door and find no one there.`)
            good++;
            break;
        case 'n':
            console.log(`You ignore the knocking.`)
            good--;
            break;
        default:
            break;
    }

    console.log('\n')
    console.log(`
    That was odd, but either way the knocking is over.
    You decide to try and get some sleep. 
    Maybe this time it will be different..
    `)

    await getInput('')

    console.log('\n')
    console.log(`
    - 3AM -
    You wake up to another noise.
    This time the creaking of a window.
    As you get up, you notice the front door is open.
    Did I forget to lock it again?
    `)

    await getInput('')
    console.log(`
    While closing the door, you glimpse across the hall
    and notice a sign on the neighbors door.
    "ESTATE SALE: MONDAY JULY 9TH, EVERYTHING MUST GO"
    `)

    await getInput('')
    console.log(`
    Hmm, strange. Maybe she is moving.
    You notice a film starting to form in your mouth.
    Drinking something usually helps, there is a machine downstairs.
    `)

    await getInput('')
    console.log(`
    You get on the elevator, but you are not alone.
    Standing in the corner is a dark and sad looking man.
    He looks down at the floor, avoiding eye contact.
    `)

    // Second Choice
    let answer2;
    while (answer2 !== 'y' && answer2 != 'n') {
        answer2 = await getInput('Say something? (y / n)')
    }
    switch (answer2) {
        case 'y':
            console.log(`
            You attempt to make small conversation,
            but the man doesn't respond. Though you
            can see a slight change to his demeanor.
            `)
            good++;
            break;
        case 'n':
            console.log(`
            There is little use speaking to him. He
            seems to want to be left alone, and Id rather
            focus on getting back to sleep.
            `)
            good--;
            break;
        default:
            break;
    }
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
