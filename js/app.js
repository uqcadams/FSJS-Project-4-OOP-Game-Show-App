/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Initialises a new game
let game;

// Event listener to start a new game and remove DOM overlay
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game;
    game.startGame();
})

// Event listeners for QWERTY keyboard
// Click event
document.getElementById('qwerty').addEventListener('click', (e) => {
    // if the clicked element is a button
    if (e.target.tagName === "BUTTON") {
        // activate the handleInteraction method on that button
        game.handleInteraction(e.target);
    } 
})

// Keyup interaction
document.addEventListener('keyup', (e) =>  {
    // saves the user key input to a variable
    let keyInput = e.key;
    // selects all keys with a class of "key"
    const qwertyKeys = document.querySelectorAll('.key');
    // iterates through the array of key items
    for (let qwerty of qwertyKeys) {
        // if the textContent matches the user key input and is not disabled...
        if (qwerty.textContent === keyInput && qwerty.disabled !== true) {
            // activate the handleInteraction method on that button
            game.handleInteraction(qwerty);
        }
    }
})