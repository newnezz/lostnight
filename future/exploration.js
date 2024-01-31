const readline = require('readline');
const keypress = require('keypress');

// Set up readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

// Set up keypress
keypress(process.stdin);

// Game state
let playerX = 0;
let playerY = 0;

// Handle arrow key presses
process.stdin.on('keypress', function (ch, key) {
  if (key) {
    // Handle arrow key presses
    switch (key.name) {
      case 'up':
        movePlayer('up');
        break;
      case 'down':
        movePlayer('down');
        break;
      case 'left':
        movePlayer('left');
        break;
      case 'right':
        movePlayer('right');
        break;
    }
  }
});

// Start listening for key events
process.stdin.setRawMode(true);
process.stdin.resume();

// Game loop
function gameLoop() {
  console.clear(); // Clear console for each frame
  console.log(`Player Position: X=${playerX}, Y=${playerY}`);
  // Render other game information...

  // Your game logic can go here...

  setTimeout(gameLoop, 100); // Repeat the game loop every 100 milliseconds
}

// Example handler for arrow key presses
function movePlayer(direction) {
  switch (direction) {
    case 'up':
      playerY--;
      break;
    case 'down':
      playerY++;
      break;
    case 'left':
      playerX--;
      break;
    case 'right':
      playerX++;
      break;
  }
}

// Start the game loop
gameLoop();

// Handle normal text input
rl.question('Press Enter to exit...', function () {
  rl.close();
});


// console.log("+-----------------------------------------------+");
// console.log("|               Game Information               |");
// console.log("+-----------------------------------------------+");
// console.log(`| Character: John Doe                           |`);
// console.log(`| Coordinates: X: 10, Y: 5                      |`);
// console.log(`| Current Goal: Explore the mysterious forest   |`);
// console.log("+-----------------------------------------------+");
