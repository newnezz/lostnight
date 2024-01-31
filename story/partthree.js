const getInput = require('../utilities/input');

async function partThree() {
    console.log(`
    As you leave the elevator,
    it seems the man is gone.
    Gues I didn't notice him get off earlier.
    `)
    
    await getInput('')
    console.log(`
    Arriving at the machines, you choose the usual.
    While walking back you notice a cat following behind.
    It's fur is thick and whiskers long. Seems quite old. 
    `)

    await getInput('')
    console.log(`
    As you continue to drink, your mouth feels better.
    Getting close to the apartment now. Cat still behind.
    `)

    await getInput('')
    console.log(`
    Arriving at your door, you decide to take a closer look at the animal.
    Petting it gives you comfort and you consider taking it in.
    Having a friend would be nice, maybe you could finally sleep.
    `)

    await getInput('')
    console.log(`
    Then you notice hidden beneath it's fur is a small necklace.
    "OWNER: MAXWELL WHITNEY, APT 248 Johnson Street"
    You consider this for a moment.
    `)

// Third Choice > Envy
let answer;
while (answer !== 'y' && answer != 'n') {
    answer = await getInput('Do you take the cat? (y / n)')
}
switch (answer) {
    case 'n':
        console.log(`You pet the cat, but leave it outside.
                     I may be alone, but the cat is not mine to take.`)
        envy = false;
        break;
    case 'y':
        console.log(`The owner doesn't seem to care if the cat is out this late.
        I'll take better care of it.`)
        envy = true;
        break;
    default:
        break;
}


}

module.exports = partThree;