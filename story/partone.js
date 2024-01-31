const getInput = require('../utilities/input');

async function partOne() {
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
}

module.exports = partOne;