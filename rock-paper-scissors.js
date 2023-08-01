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
function playSingleRoundOfRPS(playerSelection, computerSelection) {
	// Sanitize input - make input case-INsensitive by converting any input
	// so that only the first letter is capitalized
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

function game() {
	let gameStringReturnValue;
	let playerWinCount = 0;
	let computerWinCount = 0;
	let tieCount = 0;

	// Play 5 games
	for (i = 0; i < 5; i++) {
		// Play a round
		gameStringReturnValue = 
			playSingleRoundOfRPS(prompt("Rock, Paper, Scissors!"), 
			getComputerChoice());
		console.log(gameStringReturnValue);
		
		// Keep track of score
		switch (determineGameState(gameStringReturnValue)) {
			case -1:
					console.error("Error on 'determineGameState()'");
					break;
			case 0:
					computerWinCount++;
					break;
			case 1:
					playerWinCount++;
					break;
			case 2:
					tieCount++;
		}

		// Output round results
		console.log(`Round ${i+1} (you: ${playerWinCount} - computer: ${computerWinCount} - tie: ${tieCount})`);
	}
	
	// Output overall winner
	if (playerWinCount === computerWinCount) {
		console.log("Best of 5 rounds ended in a tie!");
	} else if (playerWinCount > computerWinCount) {
		console.log("You won the best of 5 rounds!");
	} else {
		console.log("You lost the best of 5 rounds!");
	}
}

// This will be an unnecessarily complicated implementation of determining the win
// state due to the playSingleRoundOfRPS() only being allowed to output a string
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

function promptTheMenu() {
	confirm("Would you like to crash your system, er, debug?") ? 
		beamMeUpScotty() : 
		game();
	return;
}

// BEGIN DEBUGGING SECTION
// BEGIN DEBUGGING SECTION
// BEGIN DEBUGGING SECTION

// This was originally made to debug, then revamped to crash my browser. I'm keeping it around and adding a button
// I wouldn't suggest going over 100,000,000 iterations. Might add input option with a sanitization cap
function beamMeUpScotty() {
	let wins = 0,
		losses = 0,
		ties = 0;

	// Give option to increase number of iterations (i)
	let tortureDuration = Number(prompt("Enter a number for debug tortureDuration (don't go higher than 100,000,000, pretty please)"));
	if (tortureDuration > 100000000) {
		tortureDuration = 100000000;
	}

	for (let i = 0; i < tortureDuration; i++) {
		switch (determineGameState(playSingleRoundOfRPS(getComputerChoice(), getComputerChoice()))) {
			case -1:
					console.error("Error on 'determineGameState()'");
					break;
			case 0:
					losses++;
					break;
			case 1:
					wins++;
					break;
			case 2:
					ties++;
					break;
			default:
					console.error("HOW THE FUCK ARE YOU HERE!?");
					break;
		}
	}
	console.log(`wins: ${wins}`);
	console.log(`losses: ${losses}`);
	console.log(`ties: ${ties}`);
	alert(`wins: ${wins} - losses: ${losses} - ties: ${ties}`);
}