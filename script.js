let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');
const playerScoreBoard = document.querySelector('#player-score');
const computerScoreBoard = document.querySelector('#computer-score');
playerScoreBoard.textContent = `Player Score: ${playerScore.toString()}`;
computerScoreBoard.textContent = `Computer Score: ${computerScore.toString()}`;

const playerChoiceButtons = document.querySelectorAll('.choice-button');

playerChoiceButtons.forEach((button) => {
  // Named function so that it can be removed
  button.addEventListener('click', gameChoice);

  button.addEventListener('transitionend', removeTransition);

  // Named function so that it can be removed
  button.addEventListener('mouseover', addHover);

  button.addEventListener('mouseout', () => button.classList.remove('hover'));
});

if (playerScore === 5 || computerScore === 5) {
  playerChoiceButtons.forEach((button) => {
    button.removeEventListener('click', gameChoice);
    button.removeEventListener('mouseover', addHover);
  });
}

function gameChoice() {
  playGame(getComChoice(), this.id);
  this.classList.add('clicked');
  this.classList.remove('hover');
}

function addHover() {
  this.classList.add('hover');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('clicked');
}

// Get random choice for computer
function getComChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let comSelection = choices[Math.floor(Math.random() * choices.length)];

  return comSelection;
}

// Compare computer choice with player choice
function playGame(comSelection, playerSelection) {
  if (playerSelection === comSelection) {
    // if tie
    result.textContent = "It's a tie!";
  } else if (playerSelection === 'rock') {
    // if player chooses rock
    if (comSelection === 'paper') {
      result.textContent = 'Computer wins! Rock beats paper.';
      computerScore++;
      computerScoreBoard.textContent = `Computer Score: ${computerScore.toString()}`;
    } else {
      result.textContent = 'Player wins! Rock beats scissors.';
      playerScore++;
      playerScoreBoard.textContent = `Player Score: ${playerScore.toString()}`;
    }
  } else if (playerSelection === 'paper') {
    // if player chooses paper
    if (comSelection === 'scissors') {
      result.textContent = 'Computer wins! Scissors beats paper.';
      computerScore++;
      computerScoreBoard.textContent = `Computer Score: ${computerScore.toString()}`;
    } else {
      result.textContent = 'Player wins! Paper beats rock.';
      playerScore++;
      playerScoreBoard.textContent = `Player Score: ${playerScore.toString()}`;
    }
  } else if (playerSelection === 'scissors') {
    // if player chooses scissors
    if (comSelection === 'rock') {
      result.textContent = 'Computer wins! Rock beats scissors.';
      computerScore++;
      computerScoreBoard.textContent = `Computer Score: ${computerScore.toString()}`;
    } else {
      result.textContent = 'Player wins! Scissors beats paper.';
      playerScore++;
      playerScoreBoard.textContent = `Player Score: ${playerScore.toString()}`;
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      result.textContent =
        'Player has defeated the computer in Rock Paper Scissors!';
    } else {
      result.textContent =
        'Computer has defeated the player in Rock Paper Scissors!';
    }

    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = `Player Score: ${playerScore.toString()}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore.toString()}`;
  }
}
