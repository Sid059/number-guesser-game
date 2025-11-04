let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => Math.floor(Math.random() * 10);  //generates random target number between 0 and 9

let getAbsoluteDistance = (guess, target) => Math.abs(target - guess);      //calculates distance between the guess and target

let checkUserInput = (input) => input >=0 && input <=9? true : alert('Please enter a valid number between 0 and 9');    //checks if the user input is within the valid range

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if(!checkUserInput(humanGuess)) return;  //if user input is invalid, return undefined, careful JS treats undefined as false in boolean context
    const humanDiff = getAbsoluteDistance(humanGuess, targetNumber);
    const computerDiff = getAbsoluteDistance(computerGuess, targetNumber);
    return humanDiff <= computerDiff;       //returns true if human value is less than or equal to computer value
}

let updateScore = (winner) => {
    if (winner == 'human'){
        humanScore += 1;
    }
    else if (winner == 'computer'){
        computerScore += 1;
    }
}

let advanceRound = () => currentRoundNumber += 1;