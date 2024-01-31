#!/usr/bin/env node
const displayTitle = require ('./utilities/title')
const partOne = require ('./story/partone')
const partTwo = require ('./story/parttwo')
const partThree = require('./story/partthree')
const ending = require('./story/ending')

// Globals
let fear;
let self;
let envy;

async function main() {
    displayTitle();
    await partOne();
    await partTwo();
    await partThree();
    await ending();
}
main();
