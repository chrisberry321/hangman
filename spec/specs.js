describe("Game", function() {
  it("will randomly select an item from the array, once it is selected ", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.solution).to.be.a("string");
  });

  it("will split it out into individual letters.", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.solutionArray).to.be.a("array");
  });

  it("will check the solution word for a chosen letter", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.guess("z")).to.equal(false);
  });


  it("will display an underscore for each letter in the array", function() {
    var newHangmanGame = new Game();
    var testWord = "flute";

    expect(underscore(testWord)).to.eql("_ _ _ _ _ ");
  });

  it("will return the index of a user's chosen letter in the solution word", function() {
    var newHangmanGame = new Game();
    newHangmanGame.solutionArray = ["t", "r", "o", "m", "b", "o", "n", "e"];
      expect(newHangmanGame.guess("o")).to.eql([2, 5]);
  });

  it("will return an empty array each input that does not match the solutionArray", function() {
    var newHangmanGame = new Game();
    newHangmanGame.solutionArray = ["t", "r", "o", "m", "b", "o", "n", "e"];
    expect(newHangmanGame.guess("a")).to.equal(false);
  });

  it("will replace a _ with the guessed letter if that letter is in the word", function() {
    var newHangmanGame = new Game();
    newHangmanGame.solutionArray = ["t", "r", "o", "m", "b", "o", "n", "e"];
    // debugger;
    expect(newHangmanGame.guess("t")).to.equal(["t"]);
  });
});
