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
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let playerSelection;


    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
        roundNumber++;
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            return `Computer: Rock\nYou: Rock\nDraw\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++;
            return `Computer: Paper\nYou: Rock\nYou lose. Paper beats Rock\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore++;
            return `Computer: Scissors\nYou: Rock\nYou win. Rock beats Scissors\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            return `Computer: Rock\nYou: Paper\nYou win. Paper beats Rock"\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return `Computer: Paper\nYou: Paper\nDraw"\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            return `Computer: Scissors\nYou: Paper\nYou lose. Scissors beats Paper\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            return `Computer: Rock\nYou: Scissors\nYou lose. Rock beats Scissors\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++;
            return `Computer: Paper\nYou: Scissors\nYou win. Scissors beats Paper\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            return `Computer: Scissors\nYou: Scissors\nDraw\nYou ${playerScore}:${computerScore} Computer`;
        }  
    } 

    function cancelGame() {
        return;
    }

    /*
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    */

    
    console.log(`Game is finished. Final score is: You ${playerScore}:${computerScore} Computer`);
    if (playerScore > computerScore) {
        console.log("You won.\nFor another game enter game() to the console or refresh the page");
    } else if (computerScore > playerScore) {
        console.log("You lost.\nFor another game enter game() to the console or refresh the page"); 
    } else if (computerScore === playerScore) {
        console.log("It's a draw.\nFor another game enter game() to the console or refresh the page");
    } 
    

    const rock = document.getElementById("rock");
    rock.addEventListener("click", function() {
        roundResult.textContent = playRound("Rock", getComputerChoice);
    });

    const paper = document.getElementById("paper");
    paper.addEventListener("click", function() {
        console.log(playRound("Paper", getComputerChoice));
    });

    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function() {
        console.log(playRound("Scissors", getComputerChoice));
    });

    const roundResult = document.getElementById("roundResult");
}

alert("Game Rock Paper Scissors starts. Get ready");

game();

