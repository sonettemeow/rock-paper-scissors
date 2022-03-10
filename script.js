let round = 1;

//for (let i = 0; i < 5; i++) {
function game () {
    let playerScore = 0;
    let computerScore = 0;

    function computerPlay() {
        let choices = ['rock', 'paper', 'scissors'];
        let choice = choices[Math.floor(Math.random()*choices.length)];
        return(choice);
    }
    
    const rock = document.querySelector('.rockButton');
    rock.addEventListener('click', playRoundRock);
    
    const paper = document.querySelector('.paperButton');
    paper.addEventListener('click', playRoundPaper);
    
    const scissors = document.querySelector('.scissorsButton');
    scissors.addEventListener('click', playRoundScissors);

    const container = document.querySelector('.message');
    container.innerHTML = 'Good luck!';

    function playRoundRock(e) {
        if (computerPlay() === 'paper') {
            computerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You lose! Paper beats rock. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        } else if (computerPlay() === 'scissors') {
            playerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You win! Rock beats scissors. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        } else if (computerPlay() === 'rock') {
            container.innerHTML = 'ROUND ' + round + '<br>Both rock. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        }

        if (playerScore === 5) {
            container.innerHTML = "Player wins with 5 points!";
        } else if (computerScore === 5) {
            container.innerHTML = "Computer wins with 5 points!";
        }
        round += 1;
    }
    
    function playRoundPaper(e) {
        if (computerPlay() === 'scissors') {
            computerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You lose! Scissors beat paper. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        } else if (computerPlay() === 'rock') {
            playerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You win! Paper beats rock. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        } else if (computerPlay() === 'paper') {
            container.innerHTML = 'ROUND ' + round + '<br>Both paper. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        }

        if (playerScore === 5) {
            container.innerHTML = "Player wins with 5 points!";
        } else if (computerScore === 5) {
            container.innerHTML = "Computer wins with 5 points!";
        }
        round += 1;
    }
    
    function playRoundScissors(e) {
        if (computerPlay() === 'rock') {
            computerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You lose! Rock beats scissors. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        } else if (computerPlay() === 'paper') {
            playerScore += 1;
            container.innerHTML = 'ROUND ' + round + '<br>You win! Scissors beat paper. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        } else if (computerPlay() === 'scissors') {
            container.innerHTML = 'ROUND ' + round + '<br>Both scissors. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
            console.log(`R: ${round} \nCS: ${computerScore} \nPS: ${playerScore}`);
        }

        if (playerScore === 5) {
            container.innerHTML = "Player wins with 5 points!";
        } else if (computerScore === 5) {
            container.innerHTML = "Computer wins with 5 points!";
        }
        round += 1;
    }
    
}

game();