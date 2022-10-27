let pScore = 0;
let cScore = 0;

function generateComputerInput() {    
    let randomNum = Math.floor(Math.random() * 3);
    const CHOICES = ['rock', 'paper', 'scissors'];
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

function checkWinner(userChoice, compChoice) {
    let result = null;    

    if (userChoice === compChoice) {
        result = "It's a Tie!";        
    } else if (isUserWinner(userChoice,compChoice)) {
        result = "You Win!";
        pScore++;        
    } else {
        result= "Yoo Loose!";
        cScore++;
    }
    
    let resultMessage = document.getElementById("result-text");
    resultMessage.innerHTML = result; 
    document.getElementById("player-score").innerHTML = pScore; 
    document.getElementById("comp-score").innerHTML = cScore;          
}
 
function selectUserInput(event) {
    let userChoice = event.target.id;
    let userInput = document.getElementById("player-choice");
    userInput.innerHTML = userChoice;
    let compChoice = generateComputerInput();
    checkWinner(userChoice, compChoice);    
}

function initializeGame(){
    let btnChoices = document.querySelectorAll(".btn");
    btnChoices.forEach(button => button.addEventListener('click', selectUserInput));
 }

window.addEventListener('DOMContentLoaded', initializeGame);
