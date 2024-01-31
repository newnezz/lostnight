// input.js
const readline = require('readline');

function getInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

module.exports = getInput;
