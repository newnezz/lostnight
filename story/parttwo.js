const getInput = require('../utilities/input');

async function partTwo() {
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
    let answer;
    while (answer !== 'y' && answer != 'n') {
        answer = await getInput('Say something? (y / n)')
    }
    switch (answer) {
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
}

module.exports = partTwo;