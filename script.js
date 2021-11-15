function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return(choice);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        console.log('You lose! Paper beats rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1; 
        console.log('You win! Paper beats rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        computerScore += 1;
        console.log('You lose! Rock beats scissors.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        console.log('You win! Rock beats scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        console.log('You lose! Scissors beat paper.')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        console.log('You win! Scissors beat paper.');
    } else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log('Tie!')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        return console.log('Player wins!');
    } else if (computerScore > playerScore) {
        return console.log('Computer wins!');
    } else if (computerScore === playerScore) {
        return console.log("It's a tie!")
    }
}

let playerScore = 0;
let computerScore = 0;
game();