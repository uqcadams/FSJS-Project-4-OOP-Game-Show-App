/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById("overlay");

// Defines the Game class
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    let phraseArray = [];
    let phrases = ["cavendish banana", "red delicious apple", "iceberg lettuce", "french onion", "roma tomato", "a raw potato"];
    // Iterates over the array of phrases and creates new Phrase objects
    for (let phrase of phrases) {
      phraseArray.push(new Phrase(phrase));
    }

    return phraseArray;
  }
  /**
   * Selects a random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    // Generates a random number based on the length of the phrases array.
    const index = Math.ceil(Math.random() * game.phrases.length - 1);
    // returns a random phrase
    return game.phrases[index];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.disabled = true;
    const letterGuess = button.textContent;
    if (this.activePhrase.checkLetter(letterGuess)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letterGuess);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      game.removeLife();
    }
  }
  /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  checkForWin() {
    const hiddenLetters = document.getElementsByClassName("hidden");
    if (hiddenLetters.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    let lives = document.querySelectorAll(".tries img");
    this.missed++;
    lives[lives.length - this.missed].src = "images/lostHeart.svg";

    if (this.missed >= 5) {
      this.gameOver(false);
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const gameOver = overlay.querySelector("#game-over-message");
    overlay.style.display = "";
    overlay.classList = "";
    if (gameWon) {
      gameOver.textContent = `Winner! Your phrase was: ${game.activePhrase.phrase}`;
      overlay.classList.add("win");
    } else {
      gameOver.textContent = `Better luck next time! Your phrase was: ${game.activePhrase.phrase}`;
      overlay.classList.add("lose");
    }
    game.resetGame();
  }
  /**
   * Resets the game board for repeated attempts
   */
  resetGame() {
    document.querySelector("#phrase ul").innerHTML = "";
    const qwertyKeys = document.querySelectorAll(".key");
    for (let qwerty of qwertyKeys) {
      qwerty.className = "key";
      qwerty.disabled = false;
    }

    let lives = document.querySelectorAll(".tries img");
    for (let life of lives) {
      life.src = "images/liveHeart.svg";
    }
  }
}
