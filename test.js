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
                return "Computer: Rock\nYou: Rock\nDraw";
            } else if (playerSelection === "Rock" && computerSelection === "Paper") {
                computerScore++;
                return "Computer: Paper\nYou: Rock\nYou lose. Paper beats Rock";
            } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
                playerScore++;
                return "Computer: Scissors\nYou: Rock\nYou win. Rock beats Scissors";
            } else if (playerSelection === "Paper" && computerSelection === "Rock") {
                playerScore++;
                return "Computer: Rock\nYou: Paper\nYou win. Paper beats Rock";
            } else if (playerSelection === "Paper" && computerSelection === "Paper") {
                return "Computer: Paper\nYou: Paper\nDraw";
            } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                computerScore++;
                return "Computer: Scissors\nYou: Paper\nYou lose. Scissors beats Paper";
            } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                computerScore++;
                return "Computer: Rock\nYou: Scissors\nYou lose. Rock beats Scissors";
            } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                playerScore++;
                return "Computer: Paper\nYou: Scissors\nYou win. Scissors beats Paper";
            } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                return "Computer: Scissors\nYou: Scissors\nDraw";
            }  
        }
    } 

    let roundNumber = 0;
    function play() {
        roundNumber++;
        playerSelection = prompt(`Game Rock Paper Scissors round ${roundNumber}. Please enter your pick`);
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You ${playerScore}:${computerScore} Computer`);
    }


    play();
    if (playerSelection === null) {
        return;
    } 
    play();
    if (playerSelection === null) {
        return;
    } 
    play();
    if (playerSelection === null) {
        return;
    } 
    play();
    if (playerSelection === null) {
        return;
    } 
    play();
    if (playerSelection === null) {
        return;
    } 

    /*
    playerSelection = prompt("Game Rock Paper Scissors round 1. Please enter your pick");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerSelection === null) {
        return;
    }
    console.log(`You ${playerScore}:${computerScore} Computer`);

    playerSelection = prompt("Game Rock Paper Scissors round 2. Please enter your pick");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerSelection === null) {
        return;
    }
    console.log(`You ${playerScore}:${computerScore} Computer`);

    playerSelection = prompt("Game Rock Paper Scissors round 3. Please enter your pick");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerSelection === null) {
        return;
    }
    console.log(`You ${playerScore}:${computerScore} Computer`);

    playerSelection = prompt("Game Rock Paper Scissors round 4. Please enter your pick");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerSelection === null) {
        return;
    }
    console.log(`You ${playerScore}:${computerScore} Computer`);

    playerSelection = prompt("Game Rock Paper Scissors round 5. Please enter your pick");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerSelection === null) {
        return;
    }
    console.log(`You ${playerScore}:${computerScore} Computer`);
    */

    console.log(`Game is finished. Final score is: You ${playerScore}:${computerScore} Computer`);
    if (playerScore > computerScore) {
        console.log("You won.\nFor another game enter game() to the console or refresh the page");
    } else if (computerScore > playerScore) {
        console.log("You lost.\nFor another game enter game() to the console or refresh the page"); 
    } else if (computerScore === playerScore) {
        console.log("It's a draw.\nFor another game enter game() to the console or refresh the page");
    } 
}

alert("Game Rock Paper Scissors starts. Get ready");

game();