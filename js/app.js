/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const game = new Game();

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index + 1} - phrase: ${phrase.phrase}`);
// });


const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());