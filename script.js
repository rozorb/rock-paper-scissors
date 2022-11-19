//function that will return rock, paper, or scissors choice for computer
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); //0-2 
    if(choice === 0) {
        return 'rock';
    } else if(choice === 1) {
        return 'paper';
    }   else {
        return 'scissors'
    }
}

//funtion that plays a single round of rock papers scissors, with two parameters
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    //conditions deciding who wins round;
    if(player === computer) {
        return 'There is no winner!';
    } else if (player === 'rock' && computer === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (player === 'rock' && computer === 'scissors') {
        return "You Win! Rock beats Scissors"
    } else if (player === 'paper' && computer === 'rock') {
        return "You Win! Paper beats Rock";
    } else if (player === 'paper' && computer === 'scissors') {
        return "You Lose! Scissors beats Paper"
    } else if (player === 'scissors' && computer === 'paper') {
        return "You win! Scissors beats Paper";
    } else if (player === 'scissors' && computer === 'rock') {
        return "You Lose! Rock beats Scissors"
    } 
}

//write a function called game()
//call playRound() inside of it/play 5 round game that keeps score and reports a winner or loser
function game() {
    let sentence;
    let win = 'Win';
    let lose = 'Lose';
    let winCount = 0, loseCount = 0;

    for (var i = 0; i < 5; i++) {
        let playerChoice = prompt("What is your choice?").toLowerCase();
        sentence = playRound(playerChoice, getComputerChoice());
        console.log(sentence);
        if(sentence.includes(win)) {
            winCount++;
        } else if(sentence.includes(lose)) {
            loseCount++;
        }

    }

    if(winCount > loseCount) {
        return 'Congrats you won!';
    } else if(winCount < loseCount) {
        return 'You lost the best out of 5';
    } else {
        return 'You tied with the computer';
    }

}

console.log(game());