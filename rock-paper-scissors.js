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

function determineGameState(gameStateString) {
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

// the damn thing returns text after each round
// 1. run determineGameState
// 2. update the running tally based on determineGameState return value
// 3. check if it was the last round
// 	a. if not, play another round
// 	b. if so, determine winner
// 4. determine text to push to UI
function beginGame () {
	
	for (let i = 0; i < 5; i++) {
		
	}

	let roundResult = playSingleRoundOfRPS(this.textContent);
	
}

// Event listeners
const playerSelectionButtons = document.querySelectorAll('.buttons-container > button');

playerSelectionButtons.forEach((button) => {
	button.addEventListener('click', beginGame);
});