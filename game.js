// returns either "Rock", "Paper", or "Scissors" randomly
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// returns a string declaring the winner of the round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
