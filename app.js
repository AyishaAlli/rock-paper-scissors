function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(options.length * Math.random())];
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
  if (playerSelection == computerSelection) {
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nTIE!`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nComputer Wins`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nComputer Wins`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nComputer Wins`;
  } else {
    return `You chose: ${playerSelection}\nComputer chose: ${computerSelection} \n\nPlayer Wins`;
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
