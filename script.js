// TO-DO
// Make it clearer when the round has changed

// GAME
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerSelection;

function getPlayerChoice(choice) {
  if (choice === "Rock") {
    playerSelection = "Rock";
  }
  if (choice === "Paper") {
    playerSelection = "Paper";
  }
  if (choice === "Scissors") {
    playerSelection = "Scissors";
  }
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getRandomChoice();
  UIplayerChoice.textContent = "Player Chose: " + playerSelection;
  UIcomputerChoice.textContent = "Computer Chose: " + computerSelection;

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    roundOutcome.textContent = "Round Outcome: Player Wins!";
    trackScore("player");
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    computerScore++;
    roundOutcome.textContent = "Round Outcome: Computer Wins!";
    trackScore("computer");
  }

  if (playerSelection === computerSelection) {
    roundOutcome.textContent = "Round Outcome: Draw";
    trackScore("draw");
  }

  if (playerScore === 5 || computerScore === 5) {
    displayWinner();
    resetGame();
  } else {
    updateScore();
  }
}
function trackScore(player) {
  const tracker = document.createElement("p");
  tracker.innerText = player = player[0].toUpperCase();
  scoreTracker.appendChild(tracker);
}
function displayWinner() {
  if (playerScore === 5) {
    alert("Player has won the game!");
  }
  if (computerScore === 5) {
    alert("Computer has won the game!");
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundOutcome.textContent = "Round Outcome:";
  UIcomputerChoice.textContent = "Computer Choice is: ";
  UIplayerChoice.textContent = "Player Choice is: ";
  scoreTracker.textContent = " ";
  updateScore();
}

function updateScore() {
  UIplayerScore.textContent = "Player Score " + playerScore;
  UIcomputerScore.textContent = "Computer Score: " + computerScore;
}

// UI
const UIplayerScore = document.getElementById("playerScore");
const UIcomputerScore = document.getElementById("computerScore");
const UIplayerChoice = document.getElementById("playerChoice");
const UIcomputerChoice = document.getElementById("computerChoice");
const roundOutcome = document.getElementById("roundOutcome");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const scoreTracker = document.getElementById("scoreTracker");

rockBtn.addEventListener("click", () => {
  playRound("Rock");
});

paperBtn.addEventListener("click", () => {
  playRound("Paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("Scissors");
});
