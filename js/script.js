const playerName = document.getElementById("playerName");
const playerText = document.getElementById("playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const submitBtn = document.getElementById("submitName");
const scoreText = document.getElementById("scoreText");

let playerNameSaved = "";
let player = "";
let computer = "";
let result = "";
let playerScore = 0;
let computerScore = 0;

submitBtn.addEventListener("click", () => {
    const input = playerName.value;
    playerNameSaved = input;
    document.getElementById('playerText').innerText = playerNameSaved;
});

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.innerHTML = `${!playerNameSaved ? "Player: " : playerNameSaved} ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    scoreText.textContent =`The player score is: ${playerScore} \n The computer score is: ${computerScore}`;
    scoreCounterAndEndOfGame();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    switch (player) {
        case "ROCK":
            if (computer === "ROCK") {
                result = "Draw!";
            } else if (computer === "PAPER") {
                result = "You lose!";
                ++computerScore;
            } else if (computer === "SCISSORS") {
                result = "You win!";
                ++playerScore;
            }
            break;
        case "PAPER":
            if (computer === "ROCK") {
                result = "You win!";
                ++playerScore;
            } else if (computer === "PAPER") {
                result = "Draw!";
            } else if (computer === "SCISSORS") {
                result = "You lose!";
                ++computerScore;
            }
            break;
        case "SCISSORS":
            if (computer === "ROCK") {
                result = "You lose!";
                ++computerScore;
            } else if (computer === "PAPER") {
                result = "You win!";
                ++playerScore;
            } else if (computer === "SCISSORS") {
                result = "Draw!";
            }
            break;
    }
    return result;
}

function scoreCounterAndEndOfGame() {
    if (playerScore === 3) {
        alert("You won the game and the scores are reset!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        alert("You lost the game and the scores are reset!");
        playerScore = 0;
        computerScore = 0;
    }
}
