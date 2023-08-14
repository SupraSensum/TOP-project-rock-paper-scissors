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
			console.error("You shouldn't be here");
			break;
	}
}

// Play a single round of RPS
function playSingleRoundOfRPS() {
	let computerSelection = getComputerChoice();

	// Sanitize input - make input case-INsensitive by converting any input
	// so that only the first letter is capitalized
	playerSelection = this.textContent;
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

function determineWinner(gameStateString) {
	// Sanitize input
	gameStateStringSanitized = gameStateString.toLowerCase();

	// Find game state string
	if (gameStateStringSanitized.includes('win')) {
		return 1;
	} else if (gameStateStringSanitized.includes('lose')) {
		return 0;
	} else if (gameStateStringSanitized.includes('tie')) {
		return 2;
	} else {
		return -1;
	}
}

function beginGame () {
	// Tools at our disposal:
	// 1. beginGame
	// 2. determineWinner
	// 3. playSingleRoundOfRPS
	// 4. getComputerChoice
	// 
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
	
	// for (let i = 0; i < ; i++) {
	// 	let roundResult = playSingleRoundOfRPS(this.textContent);
	// 	console.log(roundResult);
	// }
	
}

// Event listeners
const beginGameButton = document.querySelector('#begin-game');

beginGameButton.addEventListener('click', replaceBeginGameButton);

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
		button.addEventListener('click', playSingleRoundOfRPS);
		buttonsContainer.appendChild(button);
	});
}