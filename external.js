const play = ["rock","paper", "scissors"];
let computerWins = 0;
let playerWins = 0;
let tieAmount = 0;

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

function computerPlay () {
     return play[Math.floor(Math.random()*play.length)]
}

/*rockButton.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', function () {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', function () {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
*/

function clickListener(event) {
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
 }

rockButton.addEventListener("click", clickListener);
paperButton.addEventListener("click", clickListener);
scissorsButton.addEventListener("click", clickListener);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieWin();
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock' ) || 
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) {
        playerWin();
    } else {
        computerWin();
    }
      }

function playerWin() {
    ++playerWins;
    playerScore.innerHTML = "Player Score: " + playerWins;
}

function computerWin() {
    ++computerWins;
    computerScore.innerHTML = "Computer score: " + computerWins;
}

function tieWin() {
    ++tieAmount;
    tieText.innerHTML = "Tied rounds: " + tieAmount;
}
