let playerScore = 0;
let computerScore = 0;

//for (let i = 0; i < 5; i++) {
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

    const container = document.querySelector('.container');
    container.innerHTML = 'tangina pls';



    function playRoundRock(e) {
        if (computerPlay() === 'paper') {
            computerScore += 1;
            container.innerHTML = 'You lose! Paper beats rock. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        } else if (computerPlay() === 'scissors') {
            playerScore += 1;
            container.innerHTML = 'You win! Rock beats scissors. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        } else if (computerPlay() === 'rock') {
            container.innerHTML = 'Both rock. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        }
        // console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`);
    }
    
    function playRoundPaper(e) {
        if (computerPlay() === 'scissors') {
            computerScore += 1;
            container.innerHTML = 'You lose! Scissors beat paper. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        } else if (computerPlay() === 'rock') {
            playerScore += 1;
            container.innerHTML = 'You win! Paper beats rock. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        } else if (computerPlay() === 'paper') {
            container.innerHTML = 'Both paper. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        }
    }
    
    function playRoundScissors(e) {
        if (computerPlay() === 'rock') {
            computerScore += 1;
            container.innerHTML = 'You lose! Rock beats scissors. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        } else if (computerPlay() === 'paper') {
            playerScore += 1;
            container.innerHTML = 'You win! Scissors beat paper. <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        } else if (computerPlay() === 'scissors') {
            container.innerHTML = 'Both scissors. Tie! <br>' + '<br>Player score - ' + playerScore + '<br>Computer score - ' + computerScore;
        }
    }

//}

//game();