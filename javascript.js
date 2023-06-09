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
    let message;

    function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
        roundNumber++;

        function results() {
            if (playerScore === 5 || computerScore === 5) {
                finalScore.textContent = `Game is finished. Final score is: You ${playerScore}:${computerScore} Computer`;
                if (playerScore > computerScore) {
                    finalScore1.textContent = "Congratulations, You won.";
                    finalScore2.textContent = "For another game press the 'New game' button";
                } else if (computerScore > playerScore) {
                    finalScore1.textContent = "Sorry, you lost.";
                    finalScore2.textContent = "For another game press the 'New game' button";
                } else if (computerScore === playerScore) {
                    finalScore1.textContent = "It's a draw";
                    finalScore2.textContent = "For another game press the 'New game' button";
                }
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
                const newGame = document.createElement("button");
                newGame.textContent = "New game";
                finalScore3.appendChild(newGame);
                newGame.addEventListener("click", function() {
                    rock.disabled = false;
                    paper.disabled = false;
                    scissors.disabled = false;
                    finalScore.textContent = undefined;
                    finalScore1.textContent = undefined;
                    finalScore2.textContent = undefined;
                    finalScore3.textContent = undefined;
                    playerScore = 0;
                    computerScore = 0;
                    score.textContent = `You ${playerScore}:${computerScore} Computer`;
                    roundResult1.textContent = undefined;
                    roundResult2.textContent = undefined;
                    roundResult3.textContent = undefined;
                });
            }
        }

        if (playerSelection === "Rock" && computerSelection === "Rock") {
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Rock";
            roundResult2.textContent = "You: Rock";
            roundResult3.textContent = "Draw";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Paper";
            roundResult2.textContent = "You: Rock";
            roundResult3.textContent = "You lose. Paper beats rock";
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Scissors";
            roundResult2.textContent = "You: Rock";
            roundResult3.textContent = "You win. Rock beats Scissors";
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Rock";
            roundResult2.textContent = "You: Paper";
            roundResult3.textContent = "You win. Paper beats Rock";
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Paper";
            roundResult2.textContent = "You: Paper";
            roundResult3.textContent = "Draw";
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Scissors";
            roundResult2.textContent = "You: Paper";
            roundResult3.textContent = "You lose. Scissors beats Paper";
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Rock";
            roundResult2.textContent = "You: Scissors";
            roundResult3.textContent = "You lose. Rock beats Scissors";
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++;
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Paper";
            roundResult2.textContent = "You: Scissors";
            roundResult3.textContent = "You win. Scissors beats Paper";
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            score.textContent = `You ${playerScore}:${computerScore} Computer`;
            results();
            roundResult1.textContent = "Computer: Scissors";
            roundResult2.textContent = "You: Scissors";
            roundResult3.textContent = "Draw";
        }   
    } 

    const rock = document.getElementById("rock");
    rock.addEventListener("click", function() {
        playRound("Rock", getComputerChoice);
    });

    const paper = document.getElementById("paper");
    paper.addEventListener("click", function() {
        playRound("Paper", getComputerChoice);
    });

    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function() {
        playRound("Scissors", getComputerChoice);
    });

    const roundResult1 = document.getElementById("roundResult1");
    const roundResult2 = document.getElementById("roundResult2");
    const roundResult3 = document.getElementById("roundResult3");

    const score = document.getElementById("score");
    score.textContent = `You ${playerScore}:${computerScore} Computer`;

    const finalScore = document.getElementById("finalScore");
    const finalScore1 = document.getElementById("finalScore1");
    const finalScore2 = document.getElementById("finalScore2");
    const finalScore3 = document.getElementById("finalScore3");
}

game();

/* line break possible solutions
multiple divs seems ok
max width 
https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent bad centering
*/