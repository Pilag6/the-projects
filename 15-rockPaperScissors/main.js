const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
// src players

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
// add event listener click

const result = document.getElementById("result");
// text content

const playerScore = document.querySelector(".score__player span");
const computerScore = document.querySelector(".score__computer span");

const resetBtn = document.querySelector(".reset button");

playerScore.textContent = 0;
computerScore.textContent = 0;

const choices = ["rock", "paper", "scissors"];

rock.addEventListener("click", () => {
    playerChoice.src = "./rock.png";

    let random = Math.floor(Math.random() * choices.length);

    console.log(random); // 0, 1, 2
    console.log(choices[random]);

    computerChoice.src = `./${choices[random]}.png`;

    if (choices[random] === "rock") {
        result.textContent = "It's a draw";
    } else if (choices[random] === "scissors") {
        result.textContent = "You Win";
        playerScore.textContent++;
    } else {
        result.textContent = "You Lose";
        computerScore.textContent++;
    }
});

paper.addEventListener("click", () => {
    playerChoice.src = "./paper.png";
    let random = Math.floor(Math.random() * choices.length);
    computerChoice.src = `./${choices[random]}.png`;

    if (choices[random] === "paper") {
        result.textContent = "It's a draw";
    } else if (choices[random] === "scissors") {
        result.textContent = "You Lose";
        computerScore.textContent++;
    } else {
        result.textContent = "You Win";
        playerScore.textContent++;
    }
});

scissors.addEventListener("click", () => {
    playerChoice.src = "./scissors.png";
    let random = Math.floor(Math.random() * choices.length);
    computerChoice.src = `./${choices[random]}.png`;
    console.log("RANDOM SCISSORS",random);

    if (choices[random] === "scissors") {
        result.textContent = "It's a draw";
    } else if (choices[random] === "rock") {
        result.textContent = "You Lose";
        computerScore.textContent++;
    } else {
        result.textContent = "You Win";
        playerScore.textContent++;
    }
});

resetBtn.addEventListener("click", () => {
    result.textContent = "Let's Play";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
});

// This is a new comment
