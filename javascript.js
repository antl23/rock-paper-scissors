console.log("Welcome to ROCK PAPER SCISSORS!");

let playerSelection = null;
let computerSelection = null;
let playerScore = 0;

function computerSelect() {
    let randomnum = Math.floor(Math.random() * 3);
    if (randomnum === 0) {
        computerSelection = "Rock";
    }
    else if (randomnum === 1) {
        computerSelection = "Paper";
    }
    else {
        computerSelection = "Scissors";
    }
}

function playRound() {
    playerSelection = prompt("Enter your choice: Rock, Paper or Scissors");
    computerSelect();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock!";
        }
        else {playerScore++;
            return "You win! Rock beats Scissors!";
            
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper!";
        }
        else {playerScore++;
            return "You win! Paper beats Rock!"; 
        }
    }
    else {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors!";
        }
        else {playerScore++;
            return "You win! Scissors beats Paper!"; 
        }
    }
}
while(playerScore < 5) {
    let result = playRound();
    console.log(result);
    console.log("Your score: " + playerScore);
}
console.log("Game Over! Your final score: " + playerScore);
