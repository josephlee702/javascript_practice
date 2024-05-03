getComputerChoice();
getHumanChoice();

function getComputerChoice(){
  let choice = Math.random();
  if (choice <= 0.33) {
    console.log("rock");
  }
  else if (choice <= 0.67) {
    console.log("paper");
  }
  else {
    console.log("scissors");
  }
  console.log(choice);
}

function getHumanChoice() {
  let userInput = prompt("Will you choose rock, paper, or scissors?");
  // console.log(userInput);

  if (userInput == "rock") {
    console.log("You have chosen rock.");
  }
  else if (userInput == "paper") {
    console.log("You have chosen paper.");
  }
  else if (userInput == "scissors") {
    console.log("You have chosen scissors.");
  }
  else {
    console.log("Please choose one of the given options.");
  }
}