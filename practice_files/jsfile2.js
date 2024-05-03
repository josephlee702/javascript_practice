function add7(num) {
  return num+7
};
console.log(add7(3));

function multiply(num1, num2) {
  return num1*num2
};
console.log(multiply(5,2));

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalize("hi my name is joseph"));

function lastLetter(str) {
  return str.charAt(str.length-1)
};
console.log(lastLetter("xyz"));