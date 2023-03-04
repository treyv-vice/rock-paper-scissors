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
    return "Draw! Keep playing if you dare!"
  }
  if (playerSelection.toLowerCase() === "rock"){
    if (computerSelection.toLowerCase() === "paper") {
      return "Paper beats rock. <font color='red'>You lose this round!</font>"
    }
    else {
      return "Rock beats scissors. <font color='green'>You win the round!</font>"
    }
  }
  if (playerSelection.toLowerCase() === "paper"){
    if (computerSelection.toLowerCase() === "scissors") {
      return "Scissors beats paper. <font color='red'>You lose this round!</font>"
    }
    else {
      return "Paper beats rock. <font color='green'>You win the round!</font>"
    }
  }
  if (playerSelection.toLowerCase() === "scissors"){
    if (computerSelection.toLowerCase() === "rock") {
      return "Rock beats scissors. <font color='red'>You lose this round!</font>"
    }
    else {
      return "Scissors beats paper. <font color='green'>You win the round!</font>"
    }
  }
}

//play a round of rock, paper, scissors using the playRound and getComputerChoice functions
function game(playerSelection) {
  const playerScoreLbl = document.querySelector('#playerScoreLbl');
  const computerScoreLbl = document.querySelector('#computerScoreLbl');
  let playerScore = parseInt(playerScoreLbl.innerText);
  let computerScore = parseInt(computerScoreLbl.innerText);

  // d nothing if score limit reached
  if (playerScore > 4 || computerScore > 4) {
    return;
  }

  const resultTxt = document.querySelector('#roundTxt');
  let result = playRound(playerSelection, getComputerChoice());
  resultTxt.innerHTML = "<strong>" + result + "</strong>";

  if (result.toLowerCase().includes("win")) {
    playerScoreLbl.innerText = ++playerScore;
  }
  else if (result.toLowerCase().includes("lose")) {
    computerScoreLbl.innerText = ++computerScore;
  }

  // display winner if game end
  if (playerScore > 4 || computerScore > 4) {
    let winner = playerScore > 4 ? "<font color='green'>Player</font>" : "<font color='red'>Computer</font>";
    let winnerText = `<strong>Winner: ${winner}!</strong>`
    winnerText += "<br><br>Refresh (F5) or click Reset to play again!"
    resultTxt.innerHTML = winnerText;
  }
}

// resets game scores and clears game texts
function resetGame() {
  document.querySelector('#playerScoreLbl').innerText = "0";
  document.querySelector('#computerScoreLbl').innerText = "0";
  document.querySelector('#roundTxt').innerText = "";
  document.querySelector('#gameEndTxt').innerText = "";
}