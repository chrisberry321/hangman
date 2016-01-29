function Game() {
  this.bodyPartCount = 0;
}

var Game = function() {
  var bandInstruments = ["clarinet", "piccolo", "trumpet", "tubas", "alto-saxophone", "timpani", "trombone", "flute", "french-horn", "snare-drum", "tenor saxophone"];

  this.solution = bandInstruments[Math.floor(Math.random()*bandInstruments.length)];
  this.solutionArray = this.solution.split("");
}

// Displays un underscore for each letter in the solution array length

var underscore = function(solutionArray) {
  var underscoreArray = [];
  for (var i = 0; i < solutionArray.length; i++) {
    underscoreArray.push('_ ');
  }
  return underscoreArray.join("");
}

/*** looks through the array for a matching letter ***/

Game.prototype.guess = function(guessedLetter, incorrectGuessCounter) {
  var arrayIndexLocation = [];
  for(var i = 0; i < this.solutionArray.length; i++) {
    if (guessedLetter === this.solutionArray[i]) {
      arrayIndexLocation.push(i);
    } else {}
  }
  if (arrayIndexLocation.length !== 0) {
    return arrayIndexLocation;
  } else {
    return false;
    alert("Sorry! ''" + guessedLetter + "'' is not in the word!");
    incorrectGuessCounter += 1;
  }
return incorrectGuessCounter;

};
// Displays the correct guessed letters back into the underscored Array

// Game.prototype.revealLetters = function (guessedLetter) {
//   for(var i = 0; i < this.solutionArray.length; i++) {
//     if(this.solutionArray[i] === guessedLetter) {
//       this.underscoredArray[i] = guessedLetter;
//     }
//   }
//   console.log("Hi from reveal letters" + this.underscoredArray.join("") + " " + this.solutionArray);
//   return this.underscoredArray.join("");
// };

// Determins if the game is over

game.prototype.gameOverCheck = function () {
  if(this.bodyPartCount >= 6) {
    return true;
  }
  return false;
};



// var alphabetArray = ["A", "B", "C"."D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
