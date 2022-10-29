let userChoice= "";
let compChoice = "";
let pScore = 0;
let cScore = 0;
// Generetes random number and displaying random computer choice
function generateComputerInput() {    
    let randomNum = Math.floor(Math.random() * 5);
    const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    compChoice = CHOICES[randomNum];
    let compInput = document.getElementById("computer-choice");
    compInput.innerHTML = compChoice;
    return compChoice;    
}

function isUserWinner(userChoice, compChoice) {
    return (userChoice === "rock" && compChoice === "scissors")
    || (userChoice === "paper" && compChoice === "rock") 
    || (userChoice === "scissors" && compChoice === "paper")
    || (userChoice === "rock" && compChoice === "lizard")
    || (userChoice === "lizard" && compChoice === "spock")
    || (userChoice === "spock" && compChoice === "scissors")
    || (userChoice === "scissors" && compChoice === "lizard")
    || (userChoice === "lizard" && compChoice === "paper")
    || (userChoice === "paper" && compChoice === "spock")
    || (userChoice === "spock" && compChoice === "rock")
    || (userChoice === "paper" && compChoice === "spock");
}
// Compares user and computer choice and increments the score depending who wins
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
// Callback function that executes after user's click on button
function selectUserInput(event) {
    userChoice = event.target.id;
    let userInput = document.getElementById("player-choice");
    userInput.innerHTML = userChoice;
    compChoice = generateComputerInput();
    checkWinner(userChoice, compChoice);    
}
// Add event listeners to buttons
function initializeGame(){
    let btnChoices = document.querySelectorAll(".btn");
    btnChoices.forEach(button => button.addEventListener('click', selectUserInput));
 }

window.addEventListener('DOMContentLoaded', initializeGame);


