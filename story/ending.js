const getInput = require('../utilities/input')

async function ending() {
    if (fear && self && envy) {
        console.log(`
        You look at the clock, it's 6AM.
        As you lay down, thoughts swarm your mind.
        Sleep alludes you, they'll never let me rest.
        `)
        await getInput('')
        console.log(`
        You should feel safe.
        You have what you need.
        You aren't alone anymore.
        Yet, none of it matters.
        `)
    }

    else if (!fear && !self && !envy) {
        console.log(`
        You look at the clock, it's already 7AM.
        But for some reason you feel good.
        Laying down on your bed feels strange.
        `)
        await getInput('')
        console.log(`
        No sleep has come, and yet you feel rested.
        Something has changed but I cannot tell what.
        `)
    }

    else {
        console.log(`
        You look at the clock, it's 6:30AM.
        Maybe now I can sleep..
        Then you feel it, nothing has changed
        `)
        await getInput('')
        console.log(`
        You open your eyes, staring at the ceiling.
        Remembering tonight, the knock, the man, the cat.
        Hopefully tomorrow is different.
        `)
    }
}

module.exports = ending;