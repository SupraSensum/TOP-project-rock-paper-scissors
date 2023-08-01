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
            return 0;
            return 'Tie! Try again';
            break;
        case 'Rock':
            if (computerSelection === 'Scissors') {
                return 1;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return -1;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        case 'Paper':
            if (computerSelection === 'Rock') {
                return 1;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return -1;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        case 'Scissors':
            if (computerSelection === 'Paper') {
                return 1;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return -1;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            break;
        default:
            console.error("UHHHHHHHH");
            return 'UHHHHHHHH';
            break;
    }
}

// This was originally made to debug, then revamped to crash my browser. I'm keeping it around and adding a button
// I wouldn't suggest going over 100,000,000 iterations. Might add input option with a sanitization cap
function beamMeUpScotty() {
    let wins = 0,
        losses = 0,
        ties = 0;
    for (let i = 0; i < 100000000; i++) {
        switch (playSingleRoundOfRPS(getComputerChoice(), getComputerChoice())) {
            case -1:
                losses++;
                break;
            case 0:
                ties++;
                break;
            case 1:
                wins++;
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