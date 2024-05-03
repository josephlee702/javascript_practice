// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// Pseduocode
// Create an interface where the user can input a number
// start a loop count from 1 to the number
// multiples of 3, print Fizz
// multiples of 5, print Buzz
// multiples of 3 AND 5, print FizzBuzz

let answer = parseInt(prompt("Please enter the number you would like to count to."))

for (let i = 1; i <= answer; i++) {
  // need this condition first because it has more requirements and would not print either of the other two phrases when the single condition is met
  if ((i % 5 === 0) && (i % 3 === 0)) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}