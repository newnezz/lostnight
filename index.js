#!/usr/bin/env node
const getInput = require('./input');

console.log('*****************************');
console.log('*** WELCOME TO Willoughby ***');
console.log('*****************************');

console.log('First, character basics:');

async function gatherCharacterBasics() {
  const name = await getInput('What is your name? ');
  const age = await getInput('What is your age? ');
  const gender = await getInput('What is your gender? ');
  const race = await getInput('What is your race? ');

  console.log(`Nice to meet you, ${name}. Let's begin...`);
  // Continue with the rest of your program
}

gatherCharacterBasics();
