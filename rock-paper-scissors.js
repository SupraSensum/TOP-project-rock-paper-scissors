let scoreHuman = 0;
let scoreComputer = 0;
let scoreTie = 0;

// Event listeners
const beginGameButton = document.querySelector('#begin-game');

beginGameButton.addEventListener('click', replaceBeginGameButton);

// Generate random computer play
function getComputerChoice() {
	switch (Math.floor(Math.random() * 3) + 1) {
		case 1:
			return "Rock";
			break;
		case 2:
			return "Paper";
			break;
		case 3: 
			return "Scissors";
			break;
		default:
			console.error("How did this happen?!");
			return "How did this happen?!";
			break;
	}
}

// Play a single round of RPS
function playSingleRoundOfRPS(playerSelection) {
	let computerSelection = getComputerChoice();

	// Sanitize input - make input case-INsensitive by converting any input
	// so that only the first letter is capitalized
	playerSelection = playerSelection.trim();
	playerSelection = 
		playerSelection.slice(0, 1).toUpperCase() + 
		playerSelection.slice(1, playerSelection.length).toLowerCase();

	// Determine winner
	switch (playerSelection) {
		case computerSelection:
			return 'Tie! Try again';
			break;
		case 'Rock':
			if (computerSelection === 'Scissors') {
					return `You win! ${playerSelection} beats ${computerSelection}`;
			} else {
					return `You lose! ${computerSelection} beats ${playerSelection}`;
			}
			break;
		case 'Paper':
			if (computerSelection === 'Rock') {
					return `You win! ${playerSelection} beats ${computerSelection}`;
			} else {
					return `You lose! ${computerSelection} beats ${playerSelection}`;
			}
			break;
		case 'Scissors':
			if (computerSelection === 'Paper') {
					return `You win! ${playerSelection} beats ${computerSelection}`;
			} else {
					return `You lose! ${computerSelection} beats ${playerSelection}`;
			}
			break;
		default:
			console.error("UHHHHHHHH");
			return 'UHHHHHHHH';
			break;
	}
}

function replaceBeginGameButton() {
	const buttonsContainer = document.querySelector('.buttons-container');
	const rockButton = document.createElement('button');
	const paperButton = document.createElement('button');
	const scissorsButton = document.createElement('button');
	const playerSelectionButtons = [
		rockButton,
		paperButton,
		scissorsButton
	]

	buttonsContainer.textContent = '';

	rockButton.id = 'rock';
	paperButton.id = 'paper';
	scissorsButton.id = 'scissors';

	rockButton.textContent = 'ROCK';
	paperButton.textContent = 'PAPER';
	scissorsButton.textContent = 'SCISSORS';

	playerSelectionButtons.forEach((button) => {
		button.addEventListener('click', beginGame);

		buttonsContainer.appendChild(button);
	});

	return;
}

	// Tools at our disposal:
	// 1. beginGame
	// 2. determineWinner
	// 3. playSingleRoundOfRPS
	// 4. getComputerChoice
	// - BUTTON ONLY RETURNS PROVIDES CHOICE; KEEP BUTTON BEHAVIOR SIMPLE
	// - run beginGame
	// 	- playSingleRoundOfRPS a user defined number of times
	// 		- getComputerChoice
	//		 	- determineWinner
	// 		- updateTally
	// 			- also updates UI tally
	// 	- determineOverallWinner
	// 		- if human > computer ? "You won best of ###!"
	// 		- if computer > human ? "Computer won best of ###!"
	// 		- "It's a tie!"

function beginGame () {
	let playerSelection = this.textContent;
	let roundResult = '';
	let gameStateStringSanitized = '';
	
	const dialogContainer = document.querySelector('.dialog-container > h2');
	const humanTally = document.querySelector('#human-tally-value > h1');
	const tieTally	= document.querySelector('#tie-tally-value > h1');
	const computerTally = document.querySelector('#computer-tally-value > h1');

	roundResult = playSingleRoundOfRPS(playerSelection);
	
	// Sanitize round's string output
	gameStateStringSanitized = roundResult.toLowerCase();

	// Find game state string and update tally on UI
	if (gameStateStringSanitized.includes('win')) {
		humanTally.textContent = ++scoreHuman;
	} else if (gameStateStringSanitized.includes('lose')) {
		computerTally.textContent = ++scoreComputer;
	} else if (gameStateStringSanitized.includes('tie')) {
		tieTally.textContent = ++scoreTie;
	} else {
		console.error('How did you even get here?!');
		return;
	}

	dialogContainer.textContent = roundResult;

	return;
}