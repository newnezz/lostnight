function clearConsole() {
    // Output enough newline characters to "scroll" existing content out of view
    console.log('\x1Bc');
  }

module.exports = clearConsole;