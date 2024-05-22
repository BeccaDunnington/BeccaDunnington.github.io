//Global Frame Constants and Variables

const gridSize = 4; // Specifying grid size
let playerPosition = { x: 0, y: 0 }; // Setting default player position
const iconTag = '<img class="icon" src="../images/kitty.png" alt="" />'; // Storing image path for character
const targetTag = '<img class="target" src="../images/mouse.png" alt="" />'; // Storing image path for target
const list = document.getElementById("control-display-list"); // Storing control list display
const gameBoard = document.getElementById("game-board"); // Get gameboard HTML element

const posiblePaths = [
  // array of path coordinates so be randomly selected from
  [1, 2, 6, 10, 9, 13],
  [1, 5, 6, 7, 3, 4],
  [1, 5, 9, 10, 11, 15],
  [1, 2, 6, 7, 11, 15],
  [1, 5, 9, 13, 14, 15],
  [1, 5, 6, 10, 14, 13],
  [1, 2, 6, 10, 11, 15],
  [1, 2, 3, 7, 11, 10],
  [1, 5, 6, 7, 11, 12],
  [1, 2, 3, 7, 11, 12],
  [1, 5, 6, 7, 8, 4],
];
//variables for game tracking
let path = []; //array to store current path coordinates
let movesList = []; //array to store players move inputs
let gameActive = true; // Variable to track game state

// Innitialise the game
function startGame() {
  // selects a random path from possiblePaths
  let position = Math.floor(Math.random() * 11); // Selects a random number between 0-10
  path = posiblePaths[position]; //set the current path to the randomly selected path

  // Resets game and user interface
  playerPosition = { x: 0, y: 0 }; //resets player position to top left corner of grid
  list.innerHTML = ""; // clears the control display list
  movesList = []; // clears the user input moves
  gameActive = true; //resets game status to active

  drawGameBoard(); //draws the gameboard using current path
}

// Function to generates the maze grid
function drawGameBoard() {
  gameBoard.innerHTML = ""; // Set content as empty
  gameBoard.classList.remove("win", "lose"); //resets the class on gameboard to remove win/lose

  // For loop to generate grid cells
  for (let y = 0; y < gridSize; y++) {
    // Rows
    for (let x = 0; x < gridSize; x++) {
      // Columns
      const tile = document.createElement("div"); // Create a div element called tile
      tile.className = "tile"; // Give tile the class name tile

      //calculate current grid cell position
      let current = y * gridSize + (x + 1); // Turn current position into position from 1-16

      // Add the target to the last path tile
      if (path[5] === current) {
        tile.innerHTML = targetTag; // insert target icon
      }

      // Add class to tiles that are part of current path (changing the colour to yellow)
      if (path.includes(current)) {
        // Check if current position is in path coordinates
        tile.classList.add("path"); // Add class of path to tile
      }

      //check if this tile is the players current position
      if (x === playerPosition.x && y === playerPosition.y) {
        // Check for player position
        tile.innerHTML = iconTag; // insert player icon
        tile.classList.add("player"); // Add player class to current tile
      }
      gameBoard.appendChild(tile); // Add tile to gameboard div
    }
  }

  // Check the player's move is valid and game outcome
  checkMove();
}

//function to check players move is valid and check the outcome of the game
function checkMove() {
  let playerCoordinate = playerPosition.y * gridSize + (playerPosition.x + 1);
  let targetCoordinate = path[5];

  //check if player reached the target
  if (playerCoordinate === targetCoordinate) {
    // if player is on the target
    // Win condition
    gameActive = false; // Game inactive (player won)
    setTimeout(() => {
      // delay
      gameBoard.innerHTML = "Winner!<br>You did it!"; // display win message
      gameBoard.classList.add("win"); // add win class to gameboard
    }, 1000); // delay 1 second before win message is displayed
  } else if (!path.includes(playerCoordinate)) {
    //if player goes outside the path
    // Lose condition
    gameActive = false; // Game over (player made an invalid move)
    gameBoard.innerHTML = "Uh oh! Wrong way. Let's try again."; // display lose message
    gameBoard.classList.add("lose"); // add lose class to gameboard
  }
}

// BtnControls button functions
function moveRight() {
  if (gameActive && movesList.length < 5) {
    movesList.push("r"); //add 'r' (right) to the movesList array

    // Add arrow to control display
    const move = document.createElement("li"); //gets the html element
    move.innerHTML = '<li class="controlIcon" id="rightIcon">→</li>'; // creates rightIcon HTML element
    list.appendChild(move); //adds rightIcon HTML element to controlDisplay
  } else {
    if (!gameActive) {
      //show alert message if game is over
      alert("Game over! Please start a new game.");
    } else {
      //show alert message if too many moves are inputted
      alert("You can only enter up to 5 moves.");
    }
  }
}

function moveLeft() {
  if (gameActive && movesList.length < 5) {
    movesList.push("l"); //add 'l' (left) to the movesList array

    // Add arrow to control display
    const move = document.createElement("li"); //gets the html element
    move.innerHTML = '<li class="controlIcon" id="leftIcon">←</li>'; // creates leftIcon HTML element
    list.appendChild(move); //adds leftIcon HTML element to controlDisplay
  } else {
    if (!gameActive) {
      //show alert message if game is over
      alert("Game over! Please start a new game.");
    } else {
      //show alert message if too many moves are inputted
      alert("You can only enter up to 5 moves.");
    }
  }
}

function moveUp() {
  if (gameActive && movesList.length < 5) {
    movesList.push("u"); //add 'u' (up) to the movesList array
    // Add arrow to control display
    const move = document.createElement("li"); //gets the html element
    move.innerHTML = '<li class="controlIcon" id="upIcon">↑</li>'; // creates upIcon HTML element
    list.appendChild(move); //adds upIcon HTML element to controlDisplay
  } else {
    if (!gameActive) {
      //show alert message if game is over
      alert("Game over! Please start a new game.");
    } else {
      //show alert message if too many moves are inputted
      alert("You can only enter up to 5 moves.");
    }
  }
}

function moveDown() {
  if (gameActive && movesList.length < 5) {
    movesList.push("d"); //add 'd' (down) to the movesList array
    // Add arrow to control display
    const move = document.createElement("li"); //gets the html element
    move.innerHTML = '<li class="controlIcon" id="downIcon">↓</li>'; // creates downIcon HTML element
    list.appendChild(move); //adds downIcon HTML element to controlDisplay
  } else {
    if (!gameActive) {
      //show alert message if game is over
      alert("Game over! Please try again.");
    } else {
      //show alert message if too many moves are inputted
      alert("You can only enter up to 5 moves.");
    }
  }
}

//clear button function
function clearBtn() {
  movesList = []; // empties the movesList array of user input moves
  list.innerHTML = ""; // clears the control display list
}

//function to sequentially execute player moves
function moveCharacter() {
  if (!gameActive) return; // Exit if game is not active
  disableControlButtons(); // Disable control buttons during move execution

  let index = 0; //count index to check current iteration and position in movesList

  //recursive function to execute each move with a delay
  function executeNextMove() {
    if (!gameActive) {
      // Game over or already completed
      enableControlButtons(); // Re-enable control buttons
      return; //exit function
    }

    if (index < movesList.length) {
      const move = movesList[index]; // get current move
      const validMove = processMove(move); // execute moving the character

      if (!validMove) {
        // Incorrect move detected
        gameActive = false; // Game over
        showGameOverMessage(); //display game over message
        enableControlButtons(); // Re-enable control buttons
        return; //exit function
      }

      // Index +=1 to process the next move after a delay
      setTimeout(() => {
        //delay container
        index++; // add one to index
        executeNextMove(); //recursively call self to execute the next move
      }, 500); // Delay 1/2 second between moves
    } else {
      // All moves executed successfully
      checkWinCondition(); //check if player has won
      enableControlButtons(); // Re-enable control buttons
    }
  }

  // Start executing moves function
  executeNextMove();
}

//function process individual moves
function processMove(move) {
  let validMove = true; // variable to track if move is valid

  //update players position based on the user input move
  if (move === "l" && playerPosition.x > 0) {
    //left
    playerPosition.x -= 1; //move left
  } else if (move === "r" && playerPosition.x < gridSize - 1) {
    //right
    playerPosition.x += 1; // move right
  } else if (move === "u" && playerPosition.y > 0) {
    //up
    playerPosition.y -= 1; // move up
  } else if (move === "d" && playerPosition.y < gridSize - 1) {
    // down
    playerPosition.y += 1; //move down
  } else {
    validMove = false; // Invalid move triggered if user move is outside the grid area
  }

  drawGameBoard(); // Redraw the game board after the move
  return validMove; // returns the validity of the move
}

//Function to display game over message
function showGameOverMessage() {
  gameBoard.innerHTML = "Uh oh! Wrong way. Let's try again."; // display message
  gameBoard.classList.add("lose"); // add lose class to gameboard
}

// function to check if win condition is met (player reached target)
function checkWinCondition() {
  const playerCoordinate = playerPosition.y * gridSize + playerPosition.x; //get player coordinate
  const targetCoordinate = path[5]; //get target coordinate

  //check if player coordinate and target coordinate are the same
  //(player reached target)
  if (playerCoordinate === targetCoordinate) {
    gameActive = false; // Game over (player reached the target)
    gameBoard.innerHTML = "Winner!<br>You did it!"; // display win message
    gameBoard.classList.add("win"); // Add win class to the game board
  } else {
    //if player did not reach target
    gameActive = false; // gave over
    showGameOverMessage(); //show lose message
  }
}

// function to disable the user input control buttons
function disableControlButtons() {
  const controlButtons = document.querySelectorAll(".controlBtn");
  controlButtons.forEach((button) => {
    button.disabled = true; // Disable control buttons during move execution
  });
}

//function to enable the user input control button
function enableControlButtons() {
  const controlButtons = document.querySelectorAll(".controlBtn");
  controlButtons.forEach((button) => {
    button.disabled = false; // Re-enable control buttons after move execution
  });
}

// Initialize game on page load
startGame();

//audio event on kitten image
const audio = new Audio(); //create audio element
audio.src = "../sounds/meow.mp3"; // set audio element to meow sound
