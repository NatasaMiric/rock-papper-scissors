 

const btnChoices = document.querySelectorAll(".btn");

const userInput = document.getElementById("player-choice");
const compInput = document.getElementById("computer-choice");
let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");
let userChoice;
let compChoice;

let pScore= 0;
let cScore= 0;




btnChoices.forEach(button => button.addEventListener('click', () => {

    userChoice = button.id;
    userInput.innerHTML = userChoice;
    generateComputerInput();
    checkWinner();
}));


function generateComputerInput() {

    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {

        compChoice = "rock";
    }
    if (randomNum === 2) {

        compChoice = "paper";
    }
    if (randomNum === 3) {

        compChoice = "scissors";
    }
    compInput.innerHTML = compChoice;
}

function isUserWinner(userChoice, compChoice) {
    return (userChoice === "rock" && compChoice === "scissors")
    || (userChoice === "paper" && compChoice === "rock") 
    || (userChoice === "scissors" && compChoice === "paper");
}

function checkWinner(userChoice, compChoice) {
    let result = null;
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
    playerScore.innerHTML = pScore;
    compScore.innerHTML = cScore;
}


