/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase {
    constructor(phrase){
        // Converts the phrase to lower case
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        
        // convert the phrase into an array of characters
        const phraseArray = this.phrase.split('');

        // iterate over the array of characters
        for (let i = 0; i < phraseArray.length; i++) {

            // create a li and add it to the DOM to hold the character
            const letter = document.createElement('li');
            letter.innerHTML = phraseArray[i];

            // check the character - add class depending on if letter or space
            if (letter.textContent === " ") {
                letter.classList.add("space");
            } else if (/[a-z]/g.test(letter.textContent)){
                letter.classList.add("letter");
                letter.classList.add("hidden");
                letter.classList.add(`${phraseArray[i]}`)
            } 

            // appends the new letter to the DOM
            document.querySelector("#phrase ul").appendChild(letter);
        }
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        // checks to see if the letter selected by the player matches a letter in the phrase.
        return this.phrase.includes(letter);
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(checkedLetter){

        const letters = document.getElementsByClassName('letter');
        // Loop through the phrase array
        for (let letter of letters) {
            if (letter.textContent === checkedLetter) {
                // Remove the hidden class and add the show class
                letter.classList.remove('hidden');
                letter.classList.add('show');
            }
        }
    }
}