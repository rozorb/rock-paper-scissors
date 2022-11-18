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

let playerChoice = prompt("What is your choice?").toLowerCase();
console.log(playRound(playerChoice, getComputerChoice().toLowerCase()));


//const computerSelection = getComputedStyle();
//console.log(playRound(playerSelection, computerSelection));

//write a function called game()
//call playRound() inside of it/play 5 round game that keeps score and reports a winner or loser
