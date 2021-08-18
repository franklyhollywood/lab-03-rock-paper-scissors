export function getRandomThrow() {
	let randomNumber = Math.ceil(Math.random() * 3);
	if (randomNumber === 1) {
		return 'rock';
	} else if (randomNumber === 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

export function didUserWin(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'Draw!';
	}
	if (playerChoice === 'rock' && computerChoice === 'scissors') {
		return 'Win!';
	}
	if (playerChoice === 'rock' && computerChoice === 'paper') {
		return 'Loose!';
	}
	if (playerChoice === 'rock' && computerChoice === 'rock') {
		return 'Draw!';
	}
	if (playerChoice === 'paper' && computerChoice === 'scissors') {
		return 'Loose!';
	}
	if (playerChoice === 'paper' && computerChoice === 'paper') {
		return 'Draw!';
	}
	if (playerChoice === 'paper' && computerChoice === 'rock') {
		return 'Win!';
	}
	if (playerChoice === 'scissors' && computerChoice === 'scissors') {
		return 'Draw!';
	}
	if (playerChoice === 'scissors' && computerChoice === 'paper') {
		return 'Win!';
	}
	if (playerChoice === 'scissors' && computerChoice === 'rock') {
		return 'Loose!';
	}
}
