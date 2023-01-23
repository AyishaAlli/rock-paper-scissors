function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(options.length * Math.random())];
}

//console.log(getComputerChoice());
const scores = {
  computer: 0,
  player: 0,
};
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nTIE!`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    scores.computer += 1;
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nComputer Wins`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    scores.computer += 1;
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nComputer Wins`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    scores.computer += 1;
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nComputer Wins`;
  } else {
    scores.player += 1;
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nPlayer Wins`;
  }
}

// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

//console.log(playRound(playerSelection, computerSelection));
console.log(game());
console.log(scores);
