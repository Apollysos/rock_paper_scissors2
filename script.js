// Random Computer Selection

const array = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  const random = Math.floor(Math.random() * array.length);
  console.log(`Computer picked ${array[random]}`);
  return array[random];
};

let computerWins = 0;
let playerWins = 0;
let playerSelection = "";
let computerSelection = "";
let score = 0;
const h1 = document.querySelector("h1");
h1.style.textAlign = "center";

let h2 = document.createElement("h2");
h2.classList.add("header2");
h2.textContent = "Choose your weapon:";
h2.style.textAlign = "center";
h2.style.fontSize = "16px";

h1.appendChild(h2);
// Create Player Buttons
const buttons = document.createElement("div");
h2.appendChild(buttons);
const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";

buttons.appendChild(btnRock);
buttons.appendChild(btnPaper);
buttons.appendChild(btnScissors);

// Events when player presses buttons

btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice(array);
  playerChoice.textContent = ` You chose: ${playerSelection}`;
  computerChoice.classList.remove("hidden");

  playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice(array);
  playerChoice.textContent = ` You chose: ${playerSelection}`;
  computerChoice.classList.remove("hidden");

  playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice(array);
  playerChoice.textContent = ` You chose: ${playerSelection}`;
  computerChoice.classList.remove("hidden");

  playRound(playerSelection, computerSelection);
});

// function game() {
//   for (i = 0; i < 5; i++) {
//     console.log(`You picked ${playerSelection}`);
//     const computerSelection = getComputerChoice();
//     console.log(
//       `Round ${i + 1}: ${playRound(playerSelection, computerSelection)}`
//     );
//   }
// }

function playRound(playerSelection, computerSelection) {
  endGame();
  if (playerSelection === computerSelection) {
    return (roundWinner.textContent = `DRAW. Score: ${playerWins}:${computerWins}`);
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;

    return (roundWinner.textContent = ` You win ! ${playerSelection} beats ${computerSelection} Score: ${playerWins}:${computerWins}`);
  } else {
    computerWins++;

    return (roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection} Score: ${playerWins}:${computerWins}`);
  }
}

// if (playerWins > computerWins) {
//   console.log(`You win ${playerWins}:${computerWins}`);
// } else if (computerWins > playerWins) {
//   console.log(`Computer wins ${computerWins}:${playerWins}`);
// } else {
//   console.log(`DRAW! ${computerWins}:${playerWins}`);
// }

// Result Container
const resultContainer = document.createElement("div");
h2.appendChild(resultContainer);

const playerChoice = document.createElement("p");
playerChoice.style.fontSize = "20px";
playerChoice.style.textAlign = "center";

const computerChoice = document.createElement("p");
computerChoice.classList.add("hidden");
computerChoice.textContent = `Computer chose: ${computerSelection}`;
computerChoice.style.fontSize = "20px";
computerChoice.style.textAlign = "center";

resultContainer.appendChild(playerChoice);
resultContainer.appendChild(computerChoice);

const roundWinner = document.createElement("p");
roundWinner.style.fontSize = "20px";
roundWinner.style.textAlign = "center";
h2.appendChild(roundWinner);

const endGame = function () {
  if (playerWins === 5 || computerWins === 5) {
    h2.removeChild(roundWinner);
    resultContainer.removeChild(playerChoice);
    resultContainer.removeChild(computerChoice);
    buttons.removeChild(btnRock);
    buttons.removeChild(btnPaper);
    buttons.removeChild(btnScissors);
    h2.classList.add("hidden");

    const finalScore = document.createElement("p");
    if (playerWins > computerWins) {
      finalScore.textContent = `Final Score: You win: ${playerWins}:${computerWins} `;
    } else {
      finalScore.textContent = `Final Score: You lose: ${playerWins}:${computerWins} `;
    }

    h1.appendChild(finalScore);
  }
};
