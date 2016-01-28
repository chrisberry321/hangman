
// var alphabetArray = ["A", "B", "C"."D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

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

Game.prototype.guess = function(letter) {

  var letterLocations = [];
  for(var i = 0; i < this.solutionArray.length; i++) {
    if (letter === this.solutionArray[i]) {
      letterLocations.push(i);
    } else {}
  }
  if (letterLocations.length !== 0) {
    return letterLocations;
  } else {
    return false;

//     var decreaseGuessValue = function(incorrectGuessCounter, correctGuess, currentGuess, frontEndLetters) {
//   if (letterLocations === false) {
//     alert("Sorry! ''" + [i] + "'' is not in the word!");
//     incorrectGuessCounter -= 1;
//   }
//   return incorrectGuessCounter;
// }
//   var revealCorrectLetter = function(currentIndex, currentGuess, frontEndLetters) {
//     frontEndLetters[currentIndex] = currentGuess;
//     return frontEndLetters;
//   }
//
//   var winLoseCondition = function(incorrectGuessCounter, frontEndLetters) {
//     if (incorrectGuessCounter === 0) {
//       return "lose";
//     }
//
//     var amountOfRevealedLetters = 0;
//     for (var i = 0; i < frontEndLetters.length; i++) {
//       if (frontEndLetters[i] != "_") {
//         amountOfRevealedLetters += 1;
//       }
//     }
//
//     if (amountOfRevealedLetters === frontEndLetters.length) {
//       return "win";
//     }
//
//   }
//
//   var displayWord = function(frontEndLetters) {
//     return frontEndLetters.toString().replace( /,/g, " " );
//   }













// var click = 0;
// if (click < 6) {
//   click += 1;
//}
// else {return alert
//
//}


    //   if (click === 1) {
    //     show img 1
    //   }
    //   else if (click === 2) {
    //     show img 2
    //   }
    //   else if (click === 3) {
    //     show img 3
    //   }
    //   else if (click === 4) {
    //     show img 4
    //   }
    //   else if (click === 5) {
    //     show img 5
    //   }
    //   else {
    //     show img 6
      // }
  }
};


// REVEAL THE CORRECT LETTER


  // var re = /guess/; //make this global
  // console.log(re);
  // var match = re.exec(this.solutionArray);
  // var position = match.index;
