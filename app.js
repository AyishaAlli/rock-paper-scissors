const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");

let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let scoreInfo = document.getElementById("scoreInfo");
let overallWinner = document.getElementById("overallWinner");

const resetBtn = document.getElementById('reset')

//scores
let user = 0;
let computer = 0;
let winner = "";
let plays = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(options.length * Math.random())];
}

function updateScore(userSelection, computerSelection) {
  if (winner === "tie") {
    scoreInfo.textContent = "This round is a tie!";
  } else if (winner === "player") {
    scoreInfo.textContent = `You won this round - ${userSelection} beats ${computerSelection}`;
  } else if (winner === "computer") {
    scoreInfo.textContent = `You lost this round - ${computerSelection} beats ${userSelection}`;
  }

  userScore.textContent = `${user}`;
  computerScore.textContent = `${computer}`;
}

function playRound(userSelection, computerSelection) {
  if (userSelection == computerSelection) {
    winner = "tie";
    plays++;
  }

  if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    user++;
    plays++;
    winner = "player";
  }

  if (
    (computerSelection === "rock" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "rock")
  ) {
    computer++;
    plays++;
    winner = "computer";
  }
  console.log(winner);
  userChoice.textContent = "✊🏿";
  updateChoice(userSelection, computerSelection);
  updateScore(userSelection, computerSelection);
  console.log(plays);

  if (isGameOver()) {
    overallWinnerMessage();
    scoreInfo.textContent = "";
    return;
  }
}

function isGameOver() {
  return plays === 5;
}
function overallWinnerMessage() {
  if (computer > user) {
    overallWinner.textContent = "COMPUTER WON!!! click the reset button to play again";
  } else if (user > computer) {
    overallWinner.textContent = "YOU WON!!! click the reset button to play again";
  } else {
    overallWinner.textContent = "YOU TIED WITH YOUR OPP!!! click the reset button to play again";
  }
}

function resetGame() {
  user = 0;
  computer = 0;
  winner = "";
  plays = 0;

  scoreInfo.textContent = ''
  userScore.textContent = `${user}`;
  computerScore.textContent = `${computer}`;

  userChoice.textContent = ''
  computerChoice.textContent = ''
  overallWinner.textContent = '';
}

function updateChoice(userSelection, computerSelection) {
  switch (userSelection) {
    case "rock":
      userChoice.textContent = "✊";
      break;
    case "paper":
      userChoice.textContent = "✋";
      break;
    case "scissors":
      userChoice.textContent = "✌️";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerChoice.textContent = "✊";
      break;
    case "paper":
      computerChoice.textContent = "✋";
      break;
    case "scissors":
      computerChoice.textContent = "✌️";
      break;
  }
}

function handleClick(userSelection) {
  if (isGameOver()) {
    overallWinnerMessage();
    console.log("gameover");
    return;
  } else {
    const computerChoice = getComputerChoice();
    const playerChoice = userSelection;
    playRound(playerChoice, computerChoice);
  }
}

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
resetBtn.addEventListener('click', ()=> resetGame())
