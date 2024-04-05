let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);

}
// function for compareGuesses
function compareGuesses(userGuess, computerGuess, targetNumber){
  const userDifference = Math.abs(targetNumber - userGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);
  if (userDifference === computerDifference){
    return true;
  }else if (userDifference < computerDifference){
    return true
  }else{
    return false
  }
}
//code for the updatescore
function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  }else if (winner === 'computer'){
    computerScore++;
  }
}
//code for the advanceRound
function advanceRound(){
currentRoundNumber++;
}
//code to compare 
function compareGuesses(userGuess, computerGuess, targetNumber){
    if (userGuess < 0 || userGuess > 9){
      alert('Your number is out of range. Please choose a number between 0 and 9');
      return fales;
    }
  }