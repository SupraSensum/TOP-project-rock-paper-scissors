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
//  - Function takes 2 parameters
//      - playerSelection
//      - computerSelection
// - Return string declaring winner
//      - "You lose! Paper beats rock"
// - playerSelection parameter case-INsensitive
function playSingleRoundOfRPS(playerSelection, computerSelection) {
    // Sanitize input - make input case-INsensitive
    // Convert any input so that only the first letter is capitalized
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

    //  - How do we determine winner?
    //      - Establish hierarchy
    //          1. Rock > scissors but is < paper
    //          2. Scissors > paper but is < rock
    //          3. Paper > rock but is < scissors
    //          - Do I create a separate function for each item?
    //          - switch statement that triggers each item's function?
    //          - doesRockWin()? doesPaperWin()? doesScissorsWin()?
    //          - returns boolean
    //          - actually, additional functions are silly. Just put it all in the switch statement
    //          - what if instead we give number values? well, it's a variable hierarchy... hmm...
    switch (playerSelection) {
        case computerSelection:
            // return 0; // uncomment to run beamMeUpScotty debugger
            return 'Tie! Try again';
            break;
        case 'Rock':
            if (computerSelection === 'Scissors') {
                // return 1; // uncomment to run beamMeUpScotty debugger
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                // return -1; // uncomment to run beamMeUpScotty debugger
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        case 'Paper':
            if (computerSelection === 'Rock') {
                // return 1; // uncomment to run beamMeUpScotty debugger
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                // return -1; // uncomment to run beamMeUpScotty debugger
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        case 'Scissors':
            if (computerSelection === 'Paper') {
                // return 1; // uncomment to run beamMeUpScotty debugger
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                // return -1; // uncomment to run beamMeUpScotty debugger
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
        gameStringReturnValue = playSingleRoundOfRPS(prompt("Pick your poison"), getComputerChoice());
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

// This will be an unnecessarily complicated implementation of determining the win state due to
//  the playSingleRoundOfRPS() only being allowed to output a string
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

// BEGIN DEBUGGING SECTION
// BEGIN DEBUGGING SECTION
// BEGIN DEBUGGING SECTION

// This was originally made to debug, then revamped to crash my browser. I'm keeping it around and adding a button
// I wouldn't suggest going over 100,000,000 iterations. Might add input option with a sanitization cap
// Uncomment the return lines in playSingleRoundOfRPS's return statements to run this debugger
function beamMeUpScotty() {
    let wins = 0,
        losses = 0,
        ties = 0;

    // Give option to increase number of iterations (i)
    let tortureDuration = Number(prompt("Enter a number for debug tortureDuration"));
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

while(true) game();