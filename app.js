const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");

let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let scoreInfo = document.getElementById("scoreInfo");

//scores
let user = 0;
let computer = 0;
let winner = "";

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(options.length * Math.random())];
}

function updateScore() {
  if (winner === "tie") {
    scoreInfo.textContent = "It's a tie!";
  } else if (winner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (winner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  userScore.textContent = `${user}`;
  computerScore.textContent = `${computer}`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    winner = "tie";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    user++;
    winner = "player";
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computer++;
    winner = "computer";
  }
  console.log(winner);
  userChoice.textContent = "✊🏿";
  updateChoice(playerSelection, computerSelection);
  updateScore();
}

function isGameOver() {
  return user === 5 || computer === 5;
}

function updateChoice(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      userChoice.textContent = "✊🏿";
      break;
    case "paper":
      userChoice.textContent = "✋🏽";
      break;
    case "scissors":
      userChoice.textContent = "✌🏾";
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

function handleClick(playerSelection) {
  const computerChoice = getComputerChoice();
  const playerChoice = playerSelection;
  console.log(computerChoice);
  console.log(playerChoice);
  //console.log(playRound('rock', 'paper'))
  //console.log(playRound(computerChoice, playerChoice));
  playRound(playerChoice, computerChoice);
}

// paperBtn.addEventListener("click", function (){
//   console.log('works')
// });
rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }
