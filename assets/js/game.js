 

const btnChoices = document.querySelectorAll(".btn");
const userInput = document.getElementById("player-choice");
const compInput = document.getElementById("computer-choice");

let userChoice;
let compChoice;

const CHOICES = ['rock', 'paper', 'scissor'];

btnChoices.forEach(button => button.addEventListener('click', () => {

    userChoice = button.id;
    userInput.innerHTML = userChoice;
    generateComputerInput();
    checkWinner();
}));


function generateComputerInput() {

    let randomNum = Math.floor(Math.random() * 3);
    compChoice = CHOICES[randomNum];
    
    compInput.innerHTML = compChoice;
    return compChoice;    
}

function isUserWinner(userChoice, compChoice) {
    return (userChoice === "rock" && compChoice === "scissors")
    || (userChoice === "paper" && compChoice === "rock") 
    || (userChoice === "scissors" && compChoice === "paper");
}

function checkWinner(userChoice, compChoice) {
    let result = null;
    let playerScore = document.getElementById("player-score");
    let compScore = document.getElementById("comp-score");
    let pScore =  playerScore.innerHTML ;
    let cScore = compScore.innerHTML;

    if (userChoice === compChoice) {
        result = "It's a Tie!";        
    }
    else if (isUserWinner()) {
        result = "You Win!";
        pScore++;        
    } else {
        result= "Yoo Loose!";
        cScore++;
    }
    
    let resultMessage = document.getElementById("result-text");
    resultMessage.innerHTML = result;    
}


