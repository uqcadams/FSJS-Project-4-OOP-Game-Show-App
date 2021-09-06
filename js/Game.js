/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        let phraseArray = []
        let phrases = [
            'cavendish banana', 
            'red delicious apple', 
            'iceberg lettuce', 
            'french onion', 
            'roma tomato'
        ];

        for (let phrase of phrases) {
            phraseArray.push(new Phrase(phrase));
        }
    
        return phraseArray;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        // Generates a random number based on the length of the phrases array.
        const index = Math.ceil(Math.random() * game.phrases.length - 1);

        // DELETE LATER ~~~~~~~~
        console.log(game.phrases[index]);

        // returns a random phrase
        return game.phrases[index];
    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
   startGame() {
       document.getElementById('overlay').style.display = "none";
       this.getRandomPhrase().addPhraseToDisplay();
   }
}