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
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    computerScore++;
    roundOutcome.textContent = "Round Outcome: Computer Wins!";
  }

  if (playerSelection === computerSelection) {
    roundOutcome.textContent = "Round Outcome: Draw";
  }

  if (playerScore === 5 || computerScore === 5) {
    displayWinner();
    resetGame();
  } else {
    updateScore();
  }
}

function displayWinner() {
  if (playerScore === 5) {
    roundOutcome.textContent = "Player Wins the Game!";
  }
  if (computerScore === 5) {
    roundOutcome.textContent = "Computer Wins the Game!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
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

rockBtn.addEventListener("click", () => {
  playRound("Rock");
});

paperBtn.addEventListener("click", () => {
  playRound("Paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("Scissors");
});

// Make it clearer when the round has changed
// Track previous rounds below the game with W / L / D etc.
