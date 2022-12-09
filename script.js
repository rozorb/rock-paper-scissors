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

/*document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
    console.log("Clicked", event.target.textContent);
    console.log(playRound(event.target.textContent, getComputerChoice()));
    }
}); */

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));

function playRound (e) {
    let player = String(e.target.id);
    let computer = getComputerChoice();
    let time = document.getElementById("display");
    //conditions deciding who wins round;
    if(player === computer) {
        console.log('There is no winner!');
        time.textContent = "There is no winner!";
    } else if (player === 'rock' && computer === 'paper') {
        time.textContent = "You Lose! Paper beats Rock";
    } else if (player === 'rock' && computer === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        time.textContent = "You Win! Rock beats Scissors";
    } else if (player === 'paper' && computer === 'rock') {
        time.textContent = "You Win! Paper beats Rock";
    } else if (player === 'paper' && computer === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        time.textContent = "You Lose! Scissors beats Paper";
    } else if (player === 'scissors' && computer === 'paper') {
        console.log('You win! Scissors beats Paper');
        time.textContent = "You win! Scissors beats Paper";
    } else if (player === 'scissors' && computer === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        time.textContent = "You Lose! Rock beats Scissors";
    } 
}

function phone() {
    document.getElementsByClassName("display").innerHTML = "1.888.888.8888";
}

//console.log(game());