
let userChoice;
let compChoice;
const CHOICES = ['rock', 'paper', 'scissors'];


function generateComputerInput() {    
    let randomNum = Math.floor(Math.random() * 3);
    compChoice = CHOICES[randomNum];
    let compInput = document.getElementById("computer-choice");
    compInput.innerHTML = compChoice;
    return compChoice;    
}

function isUserWinner(userChoice, compChoice) {
    return (userChoice === "rock" && compChoice === "scissors")
    || (userChoice === "paper" && compChoice === "rock") 
    || (userChoice === "scissors" && compChoice === "paper");
}

function checkWinner() {
    let result = null;
    let playerScore = document.getElementById("player-score");
    let compScore = document.getElementById("comp-score");    
    let pScore =  playerScore.innerHTML ;
    let cScore = compScore.innerHTML;

    if (userChoice === compChoice) {
        result = "It's a Tie!";        
    }
    else if (isUserWinner(userChoice,compChoice)) {
        result = "You Win!";
        pScore++;        
    } else {
        result= "Yoo Loose!";
        cScore++;
    }
    
    let resultMessage = document.getElementById("result-text");
    resultMessage.innerHTML = result;        
}
 
function selectUserInput(event) {
    userChoice = event.target.id;
    let userInput = document.getElementById("player-choice");
    userInput.innerHTML = userChoice;
    compChoice = generateComputerInput();
    checkWinner();    
}

function initializeGame(){
    let btnChoices = document.querySelectorAll(".btn");
    btnChoices.forEach(button => button.addEventListener('click', selectUserInput));
}

window.addEventListener('DOMContentLoaded', initializeGame);
