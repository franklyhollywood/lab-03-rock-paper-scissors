// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './get-random-throw.js';

const buttonEl = document.querySelector('#submit');
const winEl = document.querySelector('#win');
const looseEl = document.querySelector('#loose');
const drawEl = document.querySelector('#draw');
const totalWinEl = document.querySelector('#totalWin');
const totalLooseEl = document.querySelector('#totalLost');
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
	// get user input
	// use user input to update state
	// update DOM to reflect the new state
});
