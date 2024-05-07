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
  let input = prompt("Will you choose rock, paper, or scissors?");
  let userInput = input.toLowerCase();
  // console.log(userInput);

  if (userInput == "rock") {
    return "rock"
    // console.log("You have chosen rock.");
  }
  else if (userInput == "paper") {
    return "paper"
    // console.log("You have chosen paper.");
  }
  else if (userInput == "scissors") {
    return "scissors"
    // console.log("You have chosen scissors.");
  }
  else {
    alert("Please choose one of the given options.");
    getHumanChoice();
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
  if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nComputer Wins!`)
    alert(`Score is Computer: ${computerScore} : Human: ${humanScore}`)
  } 
  else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nHuman Wins!`)
    alert(`Score is Computer: ${computerScore} : Human: ${humanScore}`)
  } 
  else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nComputer Wins!`)
    alert(`Score is Computer: ${computerScore} : Human: ${humanScore}`)
  } 
  else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nHuman Wins!`)
    alert(`Score is Computer: ${computerScore} : Human: ${humanScore}`)
  } 
  else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nComputer Wins!`)
    alert(`Score is Computer: ${computerScore} : Human: ${humanScore}`)
  } 
  else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nHuman Wins!`)
    alert(`Score is Computer: ${computerScore} : Human: ${humanScore}`)
  } 
  else {
    alert(`Human selected ${humanSelection} and Computer selected ${computerSelection}. \nIt was a tie. Try again.`)
    playRound(humanSelection, computerSelection);
  }
}


// function playGame(); {
//   let computerScore = 0;
//   let humanScore = 0;

//   playRound(humanSelection, computerSelection);
// }