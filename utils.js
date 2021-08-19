export function didUserWin(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'draw';
	}
	if (playerChoice === 'rock' && computerChoice === 'scissors') {
		return 'win';
	}
	if (playerChoice === 'rock' && computerChoice === 'paper') {
		return 'lose';
	}
	if (playerChoice === 'rock' && computerChoice === 'rock') {
		return 'draw';
	}
	if (playerChoice === 'paper' && computerChoice === 'scissors') {
		return 'lose';
	}
	if (playerChoice === 'paper' && computerChoice === 'paper') {
		return 'draw';
	}
	if (playerChoice === 'paper' && computerChoice === 'rock') {
		return 'win';
	}
	if (playerChoice === 'scissors' && computerChoice === 'scissors') {
		return 'draw';
	}
	if (playerChoice === 'scissors' && computerChoice === 'paper') {
		return 'win';
	}
	if (playerChoice === 'scissors' && computerChoice === 'rock') {
		return 'lose';
	}
}
