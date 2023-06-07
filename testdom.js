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

        function results() {
            if (playerScore == 5 || computerScore == 5) {
                finalScore.textContent = `Game is finished. Final score is: You ${playerScore}:${computerScore} Computer`;
                if (playerScore > computerScore) {
                    finalScore.textContent += "You won.\nFor another game enter game() to the console or refresh the page";
                } else if (computerScore > playerScore) {
                    finalScore.textContent += "You lost.\nFor another game enter game() to the console or refresh the page"; 
                } else if (computerScore === playerScore) {
                    finalScore.textContent += "It's a draw.\nFor another game enter game() to the console or refresh the page";
                }
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
                const newGame = document.createElement("button");
                newGame.textContent = "New game";
                finalScore.appendChild(newGame);
                newGame.addEventListener("click", function() {
                    rock.disabled = false;
                    paper.disabled = false;
                    scissors.disabled = false;
                    finalScore.textContent = undefined;
                    score.textContent = "You 0:0 Computer";
                    roundResult.textContent = undefined;
                    playerScore = 0;
                    computerScore = 0;
                })
            }
        }

        if (playerSelection === "Rock" && computerSelection === "Rock") {
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Rock\nYou: Rock\nDraw\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Paper\nYou: Rock\nYou lose. Paper beats Rock\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Scissors\nYou: Rock\nYou win. Rock beats Scissors\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Rock\nYou: Paper\nYou win. Paper beats Rock"\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Paper\nYou: Paper\nDraw"\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Scissors\nYou: Paper\nYou lose. Scissors beats Paper\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Rock\nYou: Scissors\nYou lose. Rock beats Scissors\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            return `Computer: Paper\nYou: Scissors\nYou win. Scissors beats Paper\nYou ${playerScore}:${computerScore} Computer`;
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
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


    

    const rock = document.getElementById("rock");
    rock.addEventListener("click", function() {
        roundResult.textContent = playRound("Rock", getComputerChoice);
    });

    const paper = document.getElementById("paper");
    paper.addEventListener("click", function() {
        roundResult.textContent = playRound("Paper", getComputerChoice);
    });

    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function() {
        roundResult.textContent = playRound("Scissors", getComputerChoice);
    });

    const roundResult = document.getElementById("roundResult");

    const score = document.getElementById("score");
    score.textContent = "You 0:0 Computer";
    
    const finalScore = document.getElementById("finalScore");
}

alert("Game Rock Paper Scissors starts. Get ready");

game();

