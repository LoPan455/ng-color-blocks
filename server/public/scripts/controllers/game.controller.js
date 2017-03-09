//The GameController will need to call the Factory

colorBlocks.controller('GameController',['DataFactory',function(DataFactory) {

console.log('game controller running');

var self = this;
// This is where we will bring in our factory 'exports'
self.colors = DataFactory.gameColors //and array of objects
self.currentScore = 0; //holds the current score
self.currentPlayer = {}; //temporary storage for the current player name and score
self.players = DataFactory.gamePlayers; //brings in the player 'database'

// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor.name + ' block?'
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    //increments the score
    self.currentScore++ ;
    alert('You got it!\n\nNow try another!');
    //writes the score to the current player object
    self.currentPlayer.score = self.currentScore;
    init();
  } else {
    //pushes the current player into the array of past players..Our makeshift db
    self.players.push(self.currentPlayer);
    self.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
