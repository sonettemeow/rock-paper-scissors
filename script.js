const container = document.querySelector('.message');
container.innerHTML = 'Race to 5 points!<br>Good luck!';

//const reset = document.querySelector('.playAgain');
//reset.style.display = 'none';

let round = 1;
let playerScore = 0;
let computerScore = 0;

//for (let i = 0; i < 5; i++) {
function game() {
    //reset.style.display = 'none';

    const rock = document.querySelector('.rockButton');
    rock.addEventListener('click', playRoundRock);
    
    const paper = document.querySelector('.paperButton');
    paper.addEventListener('click', playRoundPaper);
    
    const scissors = document.querySelector('.scissorsButton');
    scissors.addEventListener('click', playRoundScissors);

    function computerPlay() {
        let choices = ['rock', 'paper', 'scissors'];
        let choice = choices[Math.floor(Math.random()*choices.length)];
        return(choice);
    }

    function playRoundRock(e) {
        if (computerPlay() === 'paper') {
            computerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You lose! Paper beats rock. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        } else if (computerPlay() === 'scissors') {
            playerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You win! Rock beats scissors. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        } else if (computerPlay() === 'rock') {
            container.innerHTML = 'ROUND ' + round + '<br>Both rock. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        }
    }
    
    function playRoundPaper(e) {
        if (computerPlay() === 'scissors') {
            computerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You lose! Scissors beat paper. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        } else if (computerPlay() === 'rock') {
            playerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You win! Paper beats rock. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        } else if (computerPlay() === 'paper') {
            container.innerHTML = 'ROUND ' + round + '<br>Both paper. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        }
    }
    
    function playRoundScissors(e) {
        if (computerPlay() === 'rock') {
            computerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You lose! Rock beats scissors. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        } else if (computerPlay() === 'paper') {
            playerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You win! Scissors beat paper. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        } else if (computerPlay() === 'scissors') {
            container.innerHTML = 'ROUND ' + round + '<br>Both scissors. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
            winner();
            round += 1;
        }
    }

    function winner(e) {
        if (playerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            round = 0;
            container.innerHTML = "Player wins with 5 points!";

        } else if (computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            round = 0;
            container.innerHTML = "Computer wins with 5 points!";
        }
    }
}

game();