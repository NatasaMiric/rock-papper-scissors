/*
 1. user select option
 2. generate computer selection
 3. display user and comp choice and message who is the winner
 4. update score
 */
 
 // Target and store all variables in use  

 const btnChoices= document.querySelectorAll(".btn");
 const resultMessage= document.getElementById("result-text");
 const userInput= document.getElementById("player-choice");
 const compInput= document.getElementById("computer-choice");
 let userChoice;
 let compChoice;
 let result;
 
 /* Select all three buttons and add event listeners so that everytime 
 when player clicks on the button the id gets extracted.
 Add the function that generates computer's choice and 
 the function that checks who is the winner
 */
 btnChoices.forEach( button => button.addEventListener('click', () => {

    userChoice= button.id;   
    generateComputerInput();
    checkWinner();
 })); 

function generateComputerInput() {
    
}

function checkWinner() {

}

