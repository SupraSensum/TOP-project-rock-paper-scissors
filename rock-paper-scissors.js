let scoreHuman = 0;
let scoreComputer = 0;
let scoreTie = 0;
let totalNumberOfRounds = 1;
let currentRound = 1;

const MAX_NUMBER_OF_ROUNDS = 20;
const MIN_NUMBER_OF_ROUNDS = 1;

// Event listeners
const beginGameButton = document.querySelector('#begin-game');

beginGameButton.addEventListener('click', presentNumRoundsInterface);

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

function presentNumRoundsInterface() {
	const buttonsContainer = document.querySelector('.buttons-container');
	
	const numberOfRoundsInputElement = document.createElement('input');
	const numberOfRoundsInputElementMessage = document.createElement('label');
	const submitButton = document.createElement('button');

	// Clear container in prep for user input
	buttonsContainer.textContent = '';
	
	numberOfRoundsInputElement.type = 'number';
	numberOfRoundsInputElement.inputMode = 'numeric';
	numberOfRoundsInputElement.id = 'total-rounds-input';
	numberOfRoundsInputElement.name = 'total-rounds-input';
	numberOfRoundsInputElement.max = MAX_NUMBER_OF_ROUNDS;
	numberOfRoundsInputElement.min = MIN_NUMBER_OF_ROUNDS;
	numberOfRoundsInputElement.value = 5;
	numberOfRoundsInputElement.setAttribute('required', '');

	numberOfRoundsInputElementMessage.setAttribute('for', 'total-rounds-input');
	numberOfRoundsInputElementMessage.textContent = 'Number of rounds (1 - 20):';

	submitButton.id = 'input-submit-button';
	submitButton.textContent = 'SUBMIT';
	submitButton.addEventListener('click', () => totalNumberOfRounds = numberOfRoundsInputElement.value);

	buttonsContainer.appendChild(numberOfRoundsInputElementMessage);
	buttonsContainer.appendChild(numberOfRoundsInputElement);
	buttonsContainer.appendChild(submitButton);

	return;
}

function presentPlayerSelectionInterface () {
	const buttonsContainer = document.querySelector('.buttons-container');

	const rockButton = document.createElement('button');
	const paperButton = document.createElement('button');
	const scissorsButton = document.createElement('button');
	const playerSelectionButtons = [
		rockButton,
		paperButton,
		scissorsButton
	];

	buttonsContainer.textContent = '';

	rockButton.id = 'rock';
	rockButton.textContent = 'ROCK';

	paperButton.id = 'paper';
	paperButton.textContent = 'PAPER';
	
	scissorsButton.id = 'scissors';
	scissorsButton.textContent = 'SCISSORS';

	playerSelectionButtons.forEach((button) => {
		button.addEventListener('click', beginGame);

		buttonsContainer.appendChild(button);
	});

	return;
}

function beginGame () {
	let playerSelection = this.textContent;
	let roundResult = '';
	let gameStateStringSanitized = '';
	
	const dialogContainer = document.querySelector('.dialog-container > h2');
	const humanTally = document.querySelector('#human-tally-value > h1');
	const tieTally	= document.querySelector('#tie-tally-value > h1');
	const computerTally = document.querySelector('#computer-tally-value > h1');

	currentRound++;

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

	// first gotta ask how many rounds user would like to play
	// if currentRound > totalNumRounds
	// 	... nothing, bruh
	// else
	// 	congrats, you

	return;
}