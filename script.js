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
  console.log("Player chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    console.log("Player Wins!");
    playerScore++;
    console.log("Player score is: " + playerScore);
    console.log("Computer score is: " + computerScore);
    UIplayerScore.textContent = "Player score is: " + playerScore;
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    console.log("Computer Wins!");
    computerScore++;
    console.log("Player score is: " + playerScore);
    console.log("Computer score is: " + computerScore);
    UIcomputerScore.textContent = "Computer score is: " + computerScore;
  }

  if (playerSelection === computerSelection) {
    console.log("Draw");
  }
}

// UI
const UIplayerScore = document.getElementById("playerScore");
const UIcomputerScore = document.getElementById("computerScore");
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

//player score
//computer score
//gameOver()

// Turn console.log()'s into textContent's
