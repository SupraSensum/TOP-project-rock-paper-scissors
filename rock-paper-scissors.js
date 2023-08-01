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

console.log(playSingleRoundOfRPS(prompt("Take your pick"), getComputerChoice()));