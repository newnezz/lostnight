#!/usr/bin/env node
const displayTitle = require ('./utilities/title')
const partOne = require ('./story/partone')
const partTwo = require ('./story/parttwo')

// Globals
let fear;
let self;
let envy;

async function main() {
    displayTitle();
    await partOne();
    await partTwo();
}
main();
