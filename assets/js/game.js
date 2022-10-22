/*
 1. user select option
 2. generate computer selection
 3. display user and comp choice and message who is the winner
 4. update score
 */

// Target and store all variables in use  

const btnChoices = document.querySelectorAll(".btn");
const resultMessage = document.getElementById("result-text");
const userInput = document.getElementById("player-choice");
const compInput = document.getElementById("computer-choice");
let userChoice;
let compChoice;
let result;

/* Select all three buttons and add event listeners so that everytime 
when player clicks on the button the id gets targeted and then it gets displayed 
in  player's choice field with the use of inner.HTML property.
Add the function that generates computer's choice and 
the function that checks who is the winner. 
*/
btnChoices.forEach(button => button.addEventListener('click', () => {

    userChoice = button.id;
    userInput.innerHTML = userChoice;
    generateComputerInput();
    checkWinner();
}));

/* Math.random will give us a random number between 1 and 3 and Math.floor an integer.
Set value for each number.If computer randomly picks 1 his value is rock, if it picks 2,
it is papper and 3 scissors. Assign the value to compChoice and add innerHTML
to be displayed on user's screen. 
*/
function generateComputerInput() {

    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {

        compChoice = "rock";
    }
    if (randomNum === 2) {

        compChoice = "papper";
    }
    if (randomNum === 3) {

        compChoice = "scissors";
    }
    compInput.innerHTML = compChoice;

}
/* Compare the user and computers input and inform user if he wins or loses.
 Assign the inner.HTML property to result message in order to be displayed on user's screen.
 */
function checkWinner() {

    if (userChoice === compChoice) {
        result = "It's a Tie!";
    }
    if (userChoice === "rock" && compChoice === "papper") {

        result = "You Loose!";
    }
    if (userChoice === "rock" && compChoice === "scissors") {

        result = " You Win!";
    }
    if (userChoice === "papper" && compChoice === "scissors") {

        result = "You Loose!";
    }
    if (userChoice === "papper" && compChoice === "rock") {

        result = "You Win!";
    }
    if (userChoice === "scissors" && compChoice === "rock") {

        result = "You Loose!";
    }
    if (userChoice === "scissors" && compChoice === "papper") {

        result = "You Win!";
    }

    resultMessage.innerHTML = result;

}