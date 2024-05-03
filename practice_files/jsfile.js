// console.log('Hello World!');

// let admin = 'admin',
//   name = 'John';
// admin = name;
// alert(admin);

// let ourPlanet = 'Earth';
// let currentUserName = 'James';

// const MAX = 57;
// let actual = MAX-13;
// let percentage = actual/MAX;
// console.log(percentage);

// let num1 = 13;
// let num2 = 4;
// console.log(num1%num2);

// let counter = 2;
// counter++;
// console.log(counter);

// exercise 1
// function troubleshooting() {
// 	const a = 1;
// 	const b = 1;

// 	let result;

// 	// Edit between these lines
// 	// =================================
// 	result = a + b;

// 	// =================================

// 	return result;
// }

// console.log(troubleshooting());

//exercise2
// number = Number(prompt("enter a number"));

// function numberChecker() {
// 	if(number >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(numberChecker());

//exercise3
// const a = 1+8;
// const b = 22*3;
// const c = 5%4;
// const d = a-17;
// const e = a+b+c+d;

// hash = {a, b, c, d, e}
// console.log(hash);

//exercise4
// const firstName = 'Joseph';
// const lastName = 'Lee';
// const thisYear = 2024;
// const birthYear = 1997;

// greeting = "Hello, my name is " + firstName + " " + lastName + ", and I am " + (thisYear-birthYear) + " years old."

// console.log(greeting);

// let dayOfWeek = 4;
// let dayName;

// switch (dayOfWeek) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Friday";
//     break;
//   case 7:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = 'Unknown';
// }

// console.log(`Today is ${dayName}`);

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

function showMessage(userName) {
  alert( `Hello ${userName}!` );
}
// showMessage("Joseph");

//this is a function expression - another way to create a function, but this method directly assigns the function to a variable to be called on later
let sayHi = function() {
  alert("Hello!");
};
// sayHi();

//anonymous functions
//ex. lines 131 and 132 of the function below
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

//arrow functions
let func = (arg1, arg2) => expression;
//this creates a function `func` that accepts arguments, then evaluates the expression on the right side with their use and returns its result
//this is short for
// let func = function(arg1, arg2) {
//   return expression;
// }
//concrete example
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
//another example
// let sayHi = () => alert("Hello!");

// sayHi();

