// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';
const buttonEl = document.querySelector('#submit');
const totalWinEl = document.querySelector('#totalWin');
const totalLoseEl = document.querySelector('#totalLost');
const totalDrawEl = document.querySelector('#totalDraw');
const computerThrow = document.querySelector('#computer-throw');
const winLoseDraw = document.querySelector('#winLoseDraw');
const resetButton = document.querySelector('#resetButton');

// console.log(
// 	buttonEl,
// 	winEl,
// 	looseEl,
// 	drawEl,
// 	totalWinEl,
// 	totalLooseEl,
// 	totalDrawEl,
// 	computerThrow
// );

// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners
buttonEl.addEventListener('click', () => {
    const computerChoice = getRandomThrow();

    computerThrow.textContent = `The computer threw: ${computerChoice}`;

    const selectedInputEl = document.querySelector('input:checked');

    const userWon = didUserWin(selectedInputEl.value, computerChoice);

    if (userWon === 'win') {
        wins++;
        winLoseDraw.textContent = 'You won!';
    } else if (userWon === 'lose') {
        losses++;
        winLoseDraw.textContent = 'You Lose!';
    } else {
        draws++;
        winLoseDraw.textContent = `It's a Draw!`;
    }

    totalDrawEl.textContent = `total draws ${draws}`;
    totalWinEl.textContent = `total wins ${wins}`;
    totalLoseEl.textContent = `total losses ${losses}`;

	// get user input
	// use user input to update state
	// update DOM to reflect the new state
});

resetButton.addEventListener('click', () => {
    location.reload();
});
//TO do:  Clear you won, you lose message each time we run the game.
//To do:  Make sure that when you hit submit with nothing selected that you throw a prompt
