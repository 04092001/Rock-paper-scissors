// GAME
let playerScore = 0;
let computerScore = 0;
let playerSelection;

function getPlayerChoice(choice) {
  if ((choice = "Rock")) {
    playerSelection = "Rock";
  }
  if ((choice = "Paper")) {
    playerSelection = "Paper";
  }
  if ((choice = "Scissors")) {
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
  UIcomputerChoice.textContent = "Computer Chose:" + computerSelection;

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    console.log("Player Wins!");
    playerScore++;
    gameOutcome.textContent = "Game Outcome: Player Wins!";
    UIplayerScore.textContent = "Player score is: " + playerScore;
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    console.log("Computer Wins!");
    computerScore++;
    gameOutcome.textContent = "Game Outcome: Computer Wins!";
    UIcomputerScore.textContent = "Computer score is: " + computerScore;
  }

  if (playerSelection === computerSelection) {
    console.log("Draw");
    gameOutcome.textContent = "Game Outcome: Draw";
  }
}

// UI
const UIplayerScore = document.getElementById("playerScore");
const UIcomputerScore = document.getElementById("computerScore");
const UIplayerChoice = document.getElementById("playerChoice");
const UIcomputerChoice = document.getElementById("computerChoice");
const gameOutcome = document.getElementById("gameOutcome");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => {
  playRound("Rock");
  UIplayerChoice.textContent = "Player Choice is: Rock";
});

paperBtn.addEventListener("click", () => {
  playRound("Paper");
  UIplayerChoice.textContent = "Player Choice is: Paper";
});

scissorsBtn.addEventListener("click", () => {
  playRound("Scissors`");
  UIplayerChoice.textContent = "Player Choice is: Scissors";
});

//gameOver()

// Turn console.log()'s into textContent's
