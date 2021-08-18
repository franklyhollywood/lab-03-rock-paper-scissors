export function getRandomThrow() {
	let randomNumber = Math.ceil(Math.randomNumber() * 3);
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
        return 'draw';
    } if playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player wins!';
    } if playerChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer wins!';
    } if playerChoice === 'rock' && computerChoice === 'rock') {
        return 'Draw!';
    } if playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer wins!';
    } if playerChoice === 'paper' && computerChoice === 'papaer') {
        return 'Draw!';
    } if playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Player wins!'
    } if playerChoice === 'scissors' && computerChoice === 'scissors') {
        return 'Draw!';
    } if playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player wins!'
    } if playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer wins!';
    }
};
