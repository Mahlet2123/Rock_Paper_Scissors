// returns either "Rock", "Paper", or "Scissors" randomly
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// returns a string declaring the winner of the round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "Paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "Scissors") {
      return "You Lose! Scissors beat Paper";
    } else {
      return "You Win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beat Paper";
    }
  }
}
// plays a 5 round game of Rock Paper Scissors and keeps score
function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  // This loop runs 5 times, playing a round of the game each time and updating the scores
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    
    if (roundResult.startsWith("You Win!")) {
      playerScore++;
    } else if (roundResult.startsWith("You Lose!")) {
      computerScore++;
    }
    
    console.log(`Score: Player ${playerScore}, Computer ${computerScore}`);
  }
  
  // This code determines the winner of the game based on the scores and returns a message declaring the winner
  if (playerScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > playerScore) {
    return "You lose the game!";
  } else {
    return "It's a tie game!";
  }
}

// This line calls the game function to start the game
console.log(game());