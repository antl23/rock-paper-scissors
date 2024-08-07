console.log("Welcome to ROCK PAPER SCISSORS!");

let playerSelection = null;
let computerSelection = null;
let wins = 0;
let losses = 0;

const opponent = document.querySelector('#opponent');
const wr = document.querySelector('#wl');


function playRound() {
    let i = 0;
    let computerSelection;

    function iterate() {
        if (i < 3) {
            let randomnum = Math.floor(Math.random() * 3);
            
            if (randomnum === 0) {
                computerSelection = "Rock";
            } else if (randomnum === 1) {
                computerSelection = "Paper";
            } else {
                computerSelection = "Scissors";
            }
            
            console.log(computerSelection);
            opponent.textContent = "computer is choosing... " + computerSelection;
            
            i++;
            setTimeout(iterate, 1000); 
        } else {
            opponent.textContent = "Computer chose: " + computerSelection;
            console.log("Computer chose: " + computerSelection);
            console.log("You chose: " + playerSelection);
            if (playerSelection === computerSelection) {
                console.log("It's a tie!");
            }
            else if (playerSelection === "Rock") {
                if (computerSelection === "Paper") {
                    losses++;
                    console.log("You lose! Paper beats Rock!");
                } else {
                    wins++;
                    console.log("You win! Rock beats Scissors!");
                }
            }
            else if (playerSelection === "Paper") {
                if (computerSelection === "Scissors") {
                    losses++;
                    console.log("You lose! Scissors beats Paper!");
                } else {
                    wins++;
                    console.log("You win! Paper beats Rock!");
                }
            }
            else {
                if (computerSelection === "Rock") {
                    losses++;
                    console.log("You lose! Rock beats Scissors!");
                } else {
                    wins++;
                    console.log("You win! Scissors beats Paper!");
                }
            }
            
            wr.textContent = "Wins: " + wins + " Losses: " + losses;
        }
    }
    iterate();

}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playerSelection = "Rock";
    playRound();
});

paper.addEventListener('click', () => {
    playerSelection = "Paper";
    playRound();
});

scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    playRound();
});

