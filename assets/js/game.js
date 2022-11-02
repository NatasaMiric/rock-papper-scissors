let userChoice = "";
let compChoice = "";
/**
 *  Array of possible computer choices
 *  @type {Array<string>} 
 */
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
/**
 * Player score
 * @type {number} 
 */
let playerScore = 0;
/**
 * Computer score
 * @type {number} 
 */
let computerScore = 0;
/**
 * Message to player if he wins or looses 
 * @type {string} 
 */
let result = null;

/** This function restarts the game */
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    userChoice = null;
    compChoice = null;
    result = null;
    document.getElementById("player-score").innerHTML = 0;
    document.getElementById("comp-score").innerHTML = 0;
    document.getElementById("player-choice").innerHTML = null;
    document.getElementById("computer-choice").innerHTML = null;
    document.getElementById("result-text").innerHTML = null;
}

/**
 * This function generates random number.
 * Each number represents one of the elements stored in variable choices.
 * Returns random computer choice.
 * @returns {string} The computer's choice
 */
function generateComputerInput() {
    let randomNum = Math.floor(Math.random() * 5);
    compChoice = CHOICES[randomNum];
    let compInput = document.getElementById("computer-choice");
    compInput.innerHTML = compChoice;
    return compChoice;
}
/**
 * isUserWinner function will get cases when the user is a winner
 * @param {string} userChoice The value of user input
 * @param {string} compChoice The value of computer input 
 * @return {isUserWinner} 
 */
function isUserWinner(userChoice, compChoice) {
    return (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "rock" && compChoice === "lizard") ||
        (userChoice === "lizard" && compChoice === "spock") ||
        (userChoice === "spock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "lizard") ||
        (userChoice === "lizard" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "spock") ||
        (userChoice === "spock" && compChoice === "rock") ||
        (userChoice === "paper" && compChoice === "spock");
}
/**
 * checkWinner function checks user and computer choice and
 * increments the score depending who wins.
 * @param {string} userChoice The value of user input
 * @param {string} compChoice The value of computer's input
 */
function checkWinner(userChoice, compChoice) {

    if (userChoice === compChoice) {
        result = "It's a Tie!";
    } else if (isUserWinner(userChoice, compChoice)) {
        result = "You Win!";
        playerScore++;
    } else {
        result = "You Loose!";
        computerScore++;
    }

    let resultMessage = document.getElementById("result-text");
    resultMessage.innerHTML = result;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("comp-score").innerHTML = computerScore;
}
/**
 * selectUserInput function is callback function that executes
 * after user input his choice of button.  
 * @param {*} event
 */
function selectUserInput(event) {
    userChoice = event.target.id;
    let userInput = document.getElementById("player-choice");
    userInput.innerHTML = userChoice;
    compChoice = generateComputerInput();
    checkWinner(userChoice, compChoice);
}
/** This function adds event listeners to all buttons that exist in the game */
function initializeGame() {
    let btnChoices = document.querySelectorAll(".btn");
    btnChoices.forEach(button => button.addEventListener('click', selectUserInput));
    document.getElementById("restart").addEventListener('click', restartGame);
}

window.addEventListener('DOMContentLoaded', initializeGame);