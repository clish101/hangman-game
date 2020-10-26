import Hangman from './hangman';
import uuidv4 from 'uuid/v4';
import getPuzzle from './requests';
const Hword = document.querySelector('#puzzle');
const Hguess = document.querySelector('#guesses');
const Hinput = document.querySelector('#inputing');

console.log(uuidv4());

let game;

// Hword.textContent = ` ${game.getPuzzle} `;

// Hguess.textContent = `${game.statusMessage}`;
// game.statusMessage();

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode);
  game.makeAGuess(guess);
  game.statusMessage;
  render();
});

const render = () => {
  Hword.innerHTML = '';
  Hguess.textContent = game.statusMessage;
  game.getPuzzle.split('').forEach((letter) => {
    const doc = document.createElement('span');
    doc.textContent = letter;
    Hword.appendChild(doc);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2')
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// countryDetails('MX')
//   .then((country) => {
//     console.log(`The country name is ${country.name}`);
//   })
//   .catch((err) => {
//     console.log(`Error ${err}`);
//   });

// getLocation()
//   .then((myLocation) => {
//     return countryDetails(myLocation.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getCurrentCountry()
//   .then((myLocation) => {
//     console.log(myLocation.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
