// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';
const buttonEl = document.querySelector('#submit');
const winEl = document.querySelector('#win');
const looseEl = document.querySelector('#loose');
const drawEl = document.querySelector('#draw');
const totalWinEl = document.querySelector('#totalWin');
const totalLoseEl = document.querySelector('#totalLost');
const totalDrawEl = document.querySelector('#totalDraw');
const computerThrow = document.querySelector('#computer-throw');

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

	const selectedInputEl = document.querySelector('input:checked');

	const userWon = didUserWin(selectedInputEl.value, computerChoice);

	if (userWon === 'win') {
		wins++;
		winEl.textContent = 'You won!';
	} else if (userWon === 'lose') {
		losses++;
		looseEl.textContent = 'You Lose!';
	} else {
		draws++;
		drawEl.textContent = 'Draw!';
	}

	totalDrawEl.textContent = draws;
	totalWinEl.textContent = wins;
	totalLoseEl.textContent = losses;

	// get user input
	// use user input to update state
	// update DOM to reflect the new state
});
