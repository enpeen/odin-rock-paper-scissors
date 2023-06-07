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

    /*
    function play() {
        playerSelection = prompt(`Game Rock Paper Scissors round ${roundNumber}. Please enter your pick`);
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
    }
    */

    function playRound(playerSelection, computerSelection) {
        playerSelection = prompt(`Game Rock Paper Scissors round ${roundNumber}. Please enter your pick`);
        computerSelection = getComputerChoice();
        roundNumber++;
        if (playerSelection === null) {
            alert("You cancelled the game");
            cancelGame();
        } 
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
            alert("Please enter one of three options");
        } else {
            if (playerSelection === "Rock" && computerSelection === "Rock") {
                console.log("Computer: Rock\nYou: Rock\nDraw");
            } else if (playerSelection === "Rock" && computerSelection === "Paper") {
                computerScore++;
                console.log("Computer: Paper\nYou: Rock\nYou lose. Paper beats Rock");
            } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
                playerScore++;
                console.log("Computer: Scissors\nYou: Rock\nYou win. Rock beats Scissors");
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
        console.log(`You ${playerScore}:${computerScore} Computer`);
    } 

    function cancelGame() {
        return;
    }


    for (let i = 1; i <= 5; i++) {
        playRound();
    }

    /*
    playRound();

    playRound();

    playRound();

    playRound();

    playRound();
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