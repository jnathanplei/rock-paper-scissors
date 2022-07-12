
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
    } else {
        return "Tie!";
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("Enter Rock, Paper, or Scissors");
        computerPlay(3);
        computerSelection = computerPlay(3); 
        playRound(playerSelection, computerSelection);
        result = playRound(playerSelection, computerSelection);

        if (result == "You Lose! Paper beats Rock") {
            computerScore = computerScore + 1;
        } else if (result == "You Lose! Scissors beat Paper") {
            computerScore = computerScore + 1;
        } else if (result == "You Lose! Rock beats Scissors") {
            computerScore = computerScore + 1;
        } else if (result == "You Win! Rock beats Scissors") {
            playerScore = playerScore + 1;
        } else if (result == "You Win! Paper beats Rock") {
            playerScore = playerScore + 1;
        } else if (result == "You Win! Scissors beats Paper") {
            playerScore = playerScore + 1;
        } else {
            playerScore = playerScore;
            computerScore = computerScore;
        }

        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        console.log("")
    }

    if (playerScore > computerScore) {
        return "You Win!"
    } else {
        return "Computer Wins!"
    }
}



//const playerSelection = "paper";
//const computerSelection = computerPlay(3);
//console.log(playRound(playerSelection, computerSelection));

