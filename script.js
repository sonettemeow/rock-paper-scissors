let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    function computerPlay() {
        let choices = ['rock', 'paper', 'scissors'];
        let choice = choices[Math.floor(Math.random()*choices.length)];
        return(choice);
    }
    
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', playRoundRock);
    
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', playRoundPaper);
    
    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', playRoundScissors);

    function playRoundRock(e) {
        if (computerPlay() === 'paper') {
            console.log('You lose! Paper beats rock.');
            computerScore += 1;
        } else if (computerPlay() === 'scissors') {
            console.log('You win! Rock beats scissors');
            playerScore += 1;
        } else if (computerPlay() === 'rock') {
            console.log('Both rock. Tie!')
        }
    }
    
    function playRoundPaper(e) {
        if (computerPlay() === 'scissors') {
            console.log('You lose! Scissors beat paper.');
            computerScore += 1;
        } else if (computerPlay() === 'rock') {
            console.log('You win! Paper beats rock');
            playerScore += 1;
        } else if (computerPlay() === 'paper') {
            console.log('Both paper. Tie!')
        }
    }
    
    function playRoundScissors(e) {
        if (computerPlay() === 'rock') {
            console.log('You lose! Rock beats scissors.');
            computerScore += 1;
        } else if (computerPlay() === 'paper') {
            console.log('You win! Scissors beat paper.')
            playerScore += 1;
        } else if (computerPlay() === 'scissors') {
            console.log('Both scissors. Tie!');
        }

    console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
    }

}

/*function playRound(playerSelection, computerSelection) {
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
}*/

//game();