/*
const array = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const computerSelection = getComputerChoice(array);
console.log(`Computer chose: ${computerSelection}`);

let playerSelection = prompt(
  "Please enter your choice: Rock, Paper, or Scissors"
).toLowerCase();

let playerWins = 0;
let computerWins = 0;

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("DRAW");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("Player wins this round!");
    playerWins++;
  } else {
    console.log("Computer wins this round!");
    computerWins++;
  }
};

playRound(playerSelection, computerSelection);

// Display the updated scores after each round
console.log(`Computer Wins: ${computerWins}, Player Wins: ${playerWins}`);

*/

const array = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * array.length);
  console.log(`Computer picked ${array[random]}`);
  return array[random];
};

let computerWins = 0;
let playerWins = 0;

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Pick your Weapon: Rock, Paper or Scissors?"
    ).toLowerCase();
    console.log(`You picked ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(
      `Round ${i + 1} : ${playRound(playerSelection, computerSelection)}`
    );
  }
}
game();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;

    return `${playerSelection} beats ${computerSelection}`;
  } else {
    computerWins++;

    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

if (playerWins > computerWins) {
  console.log(`You win ${playerWins}:${computerWins}`);
} else if (computerWins > playerWins) {
  console.log(`Computer wins ${computerWins}:${playerWins}`);
} else {
  console.log(`DRAW! ${computerWins}:${playerWins}`);
}
