let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
  let choice = Math.random();
  if (choice <= 0.33) {
    return "rock"
    // console.log("rock");
  }
  else if (choice <= 0.67) {
    return "paper"
    // console.log("paper");
  }
  else {
    return "scissors"
    // console.log("scissors");
  }
  // console.log(choice);
}

function getHumanChoice() {
  let userInput = prompt("Will you choose rock, paper, or scissors?");
  // console.log(userInput);

  if (userInput.toLowerCase == "rock") {
    return "rock"
    // console.log("You have chosen rock.");
  }
  else if (userInput.toLowerCase == "paper") {
    return "paper"
    // console.log("You have chosen paper.");
  }
  else if (userInput.toLowerCase == "scissors") {
    return "scissors"
    // console.log("You have chosen scissors.");
  }
  else {
    alert("Please choose one of the given options.");
    getHumanChoice();
  }
}

function playRound(humanSelection, computerSelection) {
  
}