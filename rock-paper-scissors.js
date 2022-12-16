//randomly generates the computer's choice of rock, paper, or scissors
function getComputerChoice () {
  let number = Math.floor(Math.random()*30); //gives an int within 0-29
  if (number>19) {
    return "rock";
  } else if (number>9) {
    return "paper";
  } else {
    return "scissors";
  }
}

//compares player's choice with computer's choice and determines the winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Draw! Play again if you dare!"
  }
  if (playerSelection.toLowerCase() === "rock"){
    if (computerSelection.toLowerCase() === "paper") {
      return "You lose! Paper beats rock."
    }
    else {
      return "You win! Rock beats scissors."
    }
  }
  if (playerSelection.toLowerCase() === "paper"){
    if (computerSelection.toLowerCase() === "scissors") {
      return "You lose! Scissors beats paper."
    }
    else {
      return "You win! Paper beats rock."
    }
  }
  if (playerSelection.toLowerCase() === "scissors"){
    if (computerSelection.toLowerCase() === "rock") {
      return "You lose! Rock beats scissors."
    }
    else {
      return "You win! Scissors beats paper."
    }
  }
}

//play 5 rounds of rock, paper, scissors using the playRound and getComputerChoice functions
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i=0; i<5; i++) {
    playerSelection = prompt("Which do you choose (rock, paper, or scissors)?: ");
    result = playRound(playerSelection, getComputerChoice());
    console.log(result);
    if (result.toLowerCase().includes("you win")) {
      playerScore++;
    }
    if (result.toLowerCase().includes("you lose")) {
      computerScore++;
    }
  }
  //log the total scores and who wins
  winner = playerScore>computerScore ? "Player" : "Computer";
  winner = playerScore===computerScore ? "Draw!" : winner;
  console.log(`Final score: ${playerScore} player - ${computerScore} computer`);
  console.log(`Winner: ${winner}!`);
}