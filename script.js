//function getComputerChoice that will return rock, paper, or scissors
function getComputerChoice() {
    let chance = Math.floor(Math.random() * 3);
    console.log(chance);
    if(chance === 0) {
        return 'rock';
    } else if(chance === 1) {
        return 'paper';
    }   else {
        return 'scissors'
    }
}

//funtion that plays a single round of rock papers scissors, with two parameters
//parameters playerSelection & computerSelection, then a string declaring the winner
//Ex: "You Lose! Paper beats Rock"
//playerSelection parameters are case-insensitive

//return results of function call not console.log, return will be used later

function playRound(playerSelection, computerSelection) {
    let player = prompt("What is your choice?").toLowerCase();
}
let hand = getComputerChoice();
console.log(hand);
const playerSelection = "rock";
//const computerSelection = getComputedStyle();
//console.log(playRound(playerSelection, computerSelection));

//write a function called game()
//call playRound() inside of it/play 5 round game that keeps score and reports a winner or loser
