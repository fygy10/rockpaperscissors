const play = ["rock","paper", "scissors"];

function computerPlay () {
     return play[Math.floor(Math.random()*play.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock' ) || 
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) {
        playerScore++;    
        return "You win!";
    } else {
        computerScore++;
        return "You lose! The computer wins this round."
    }
      }

playerScore = parseInt(0);
computerScore = parseInt(0);

function game () {
    for (i = 0; i <= 5; i++) {
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log('Player score = ' + playerScore);
    console.log('Computer score = ' + computerScore);
    }
}
game ();