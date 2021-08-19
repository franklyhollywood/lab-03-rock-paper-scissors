// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('rock vs paper', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'lose';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('rock', 'paper');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('rock vs rock', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'draw';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('rock', 'rock');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('rock vs scissors', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'win';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('rock', 'scissors');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('scissors vs paper', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'win';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('scissors', 'paper');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('scissors vs rock', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'lose';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('scissors', 'rock');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('scissors vs scissors', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'draw';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('scissors', 'scissors');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('paper vs paper', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'draw';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('paper', 'paper');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('paper vs rock', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'win';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('paper', 'rock');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
test('paper vs scissors', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 'lose';

	//Act
	// Call the function you're testing and set the result to a const
	const actual = didUserWin('paper', 'scissors');

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
