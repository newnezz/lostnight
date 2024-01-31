#!/usr/bin/env node
const getInput = require('./input');
const clearConsole = require('./clear')

let fear;
let self;
let envy;

clearConsole();
console.log('******************');
console.log('*** Lost Night ***');
console.log('******************');

async function main() {
    console.log(`
    - 1AM -
    You can't fall asleep.
    Not that you don't want to.
    Something in you simply won't allow it.
    At least not yet.
    `)
    await getInput('')

    console.log(`
    Someone knocks at the door.
    I'm not expecting anyone..
    You wait, hoping they leave.
    `)
    await getInput('')

    console.log(`
    But then, another knock. This time harder.
    Your discomfort increases, but try to remain still.
    Surely they will leave.
    `)

    await getInput('')

    console.log(`
    "Please, help me..."
    The voice sounds familiar, yet distorted.
    Maybe it's the lady across the hall.
    She's been quite sick lately.
    `)

    // First Choice > Fear
    let answer;
    while (answer !== 'y' && answer != 'n') {
        answer = await getInput('Answer the door? (y / n)')
    }
    switch (answer) {
        case 'y':
            console.log(`You answer the door and find no one there.`)
            fear = false;
            break;
        case 'n':
            console.log(`You ignore the knocking.`)
            fear = true;
            break;
        default:
            break;
    }

    await getInput('')

    console.log('\n')
    console.log(`
    That was odd, but either way the knocking is over.
    You decide to try and get some sleep. 
    Maybe they will finally let me.
    `)

    await getInput('')

    console.log('\n')
    console.log(`
    - 3AM -
    Hours later, sleep has not come.
    ${fear ? 
        `Creaking of a door startles you.
         Looking around you notice the front door open.
         Did I forget to lock it?`
         : ''
    }
    `)

    await getInput('')
    console.log(`
    You decide to take a walk.
    Maybe some fresh air will help.
    `)

    await getInput('')
    console.log(`
    While leaving, you glimpse across the hall
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

    // Second Choice > Self
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
            self = false;
            break;
        case 'n':
    console.log(`
    There is little use speaking to him. He
    seems to want to be left alone, and Id rather
    focus on getting back to sleep.
    `)
            self = true;
            break;
        default:
            break;
    }

    await getInput('')
    console.log(`
    
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
