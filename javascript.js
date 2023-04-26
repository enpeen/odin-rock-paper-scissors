function getComputerChoice() {
    let random = Math.random();
    let result;
    if (random > 0.66) {
        result = "Rock";
    } else if (random > 0.33 && random <= 0.66) {
        result = "Paper";
    } else if (random <= 0.33) {
        result = "Scissors";
    }
    console.log(result);
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        alert("You cancelled the game");
        return;
    } 
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        alert("Please enter one of three options");
    } else {
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            return "Draw";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "You lose. Paper beats Rock";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You win. Rock beats Scissors";
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You win. Paper beats Rock";
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return "Draw";
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "You lose. Scissors beats paper";
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "You lose. Rock beats Scissors";
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "You win. Scissors beats paper";
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            return "Draw";
        }  
    }
} 

let playerSelection = prompt("Game Rock Paper Scissors starts. Please enter your pick");
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
