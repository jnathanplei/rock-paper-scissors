function computerPlay(max) {
    num = Math.floor(Math.random() * max);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" & computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "scissors") {
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "rock" & computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay(3);
console.log(playRound(playerSelection, computerSelection));