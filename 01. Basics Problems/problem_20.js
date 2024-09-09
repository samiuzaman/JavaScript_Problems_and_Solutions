/*
Problem : Input 3 Numbers and Find the max number using function.

*/

// Solution :
const number1 = 76;
const number2 = 92;
const number3 = 49;

function findMaxNumber(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return `Max number is ${number1}`;
  } else if (number2 > number1 && number2 > number3) {
    return `Max number is ${number2}`;
  } else {
    return `Max number is ${number3}`;
  }
}
const result = findMaxNumber(number1, number2, number3);
console.log(result);

// using method function
const a = 44;
const b = 55;
const c = 66;

const maxNumber = Math.max(a, b, c);
console.log(maxNumber);
