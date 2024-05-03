function getComputerChoice(){
  let choice = Math.random();

  if (choice <= 0.33) {
    console.log("rock")
  }
  else if (0.33 < choice <= 0.67) {
    console.log("paper")
  }
  else {
    console.log("scissors")
  }
  console.log(choice);
}

getComputerChoice();