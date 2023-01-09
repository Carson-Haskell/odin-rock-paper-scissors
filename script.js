game();

// Get player choice
function getPlayerChoice() {
    let playerSelection;
    do {
        playerSelection = prompt("Please choose rock, paper, or scissors: ");
        playerSelection = playerSelection.toLowerCase();
    } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');

    return playerSelection;
}

// Get random choice for computer 
function getComChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let comSelection = choices[Math.floor(Math.random() * choices.length)];

    return comSelection;
}

// Compare computer choice with player choice
function playRound(comSelection, playerSelection) {
    alert(`Player's weapon of choice: ${playerSelection}\n\nComputer's weapon of choice: ${comSelection}\n\n...Determining Results...`);
    if (playerSelection === comSelection) {
        return 'Uh oh! Both players chose the same. No winner!';
    } 
    else if (playerSelection === 'rock') {
       return comSelection === 'paper' ? 'Computer wins the round! Paper beats rock.' : 'Player wins the round! Rock beats scissors.';
    } 
    else if (playerSelection === 'paper') {
       return comSelection === 'scissors' ? 'Computer wins the round! Scissors beats paper.' : 'Player wins the round! Paper beats rock.';
    } 
    else if (playerSelection === 'scissors') {
        return comSelection === 'rock' ? 'Computer wins the round! Rock beats scissors.' : 'Player wins the round! Scissors beats paper.';
    }
}

// Creates a game loop to play 5 rounds
function game() {
    let comScore = 0;
    let playerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let gameResult = playRound(getComChoice(), getPlayerChoice());
        if (gameResult.includes('Player')) {
            playerScore++;
            alert(`${gameResult}\n\nPlayer score: ${playerScore}\n\nComputer score: ${comScore}\n\nPress enter to begin next round.`);
        } else if (gameResult.includes('Computer')) {
            comScore++;
            alert(`${gameResult}\n\nPlayer score: ${playerScore}\n\nComputer score: ${comScore}\n\nPress enter to begin next round.`);
        } else {
            alert(`${gameResult}\n\nPress enter to begin next round.`);
        }
    }

    if (playerScore > comScore) {
        alert(`Player wins the game with a total score of ${playerScore}!`);
    } else if (comScore > playerScore) {
        alert(`Computer wins the game with a total score of ${comScore}!`);
    } else {
        alert(`Aaaaaand the game is a tie with both player and computer sharing a score of ${playerScore}.`);
    }

    // Give user option to play again and repeat game loop if yes
    let playAgain;
    do {
        playAgain = prompt("Do you want to play again? Yes/No: ");
        playAgain = playAgain.toLowerCase();
    } while (playAgain !== 'yes' && playAgain !== 'no');

    if (playAgain === 'yes') {
        game();
    } else {
        alert("Thanks for playing!");
    }
}

