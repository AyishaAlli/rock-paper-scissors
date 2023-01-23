const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const userChoice = document.getElementsByClassName("userChoice");
const computerChoice = document.getElementsByClassName("computerChoice");

const userScore = document.getElementsByClassName("userScore");
const computerScore = document.getElementsByClassName("computerScore");
const scoreInfo = document.getElementById("scoreInfo");

//scores
let player = 0;
let computer = 0;
let winner = "";


function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(options.length * Math.random())];
}

function playRound(playerSelection, computerSelection) {
  userScore.innerHTML = scores[player];
  computerScore.innerHTML = scores[computer];
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    winner = "Tie";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    winner = "player";
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    winner = "computer";
  }
}

function isGameOver() {
  return player === 5 || computer === 5;
}

function updateChoice(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerChoice.textContent = "✊🏿";
      break;
    case "paper":
      playerChoice.textContent = "✋🏽";
      break;
    case "scissors":
      playerChoice.textContent = "✌🏾";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerChoice.textContent = "✊🏿";
      break;
    case "paper":
      computerChoice.textContent = "✋🏽";
      break;
    case "scissors":
      computerChoice.textContent = "✌🏾";
      break;
  }
}

function updateScore() {
  if (winner === "tie") {
    scoreInfo.textContent = "It's a tie!";
  } else if (winner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (winner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  playerScore.textContent = `Player: ${playerScore}`;
  computerScore.textContent = `Computer: ${computerScore}`;
}

function handleClick(playerSelection) {
  const computerChoice = getComputerChoice();
  const playerChoice = playerSelection;
  playRound(computerChoice, playerChoice);
  updateChoice(playerChoice, computerChoice);
}

//rockBtn.addEventListener("click", () => handleClick("rock"));
// paperBtn.addEventListener("click", () => handleClick("paper"));
// scissorsBtn.addEventListener("click", () => handleClick("scissors"));


// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

