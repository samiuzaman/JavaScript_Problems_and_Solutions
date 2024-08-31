/*
Problem : you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not,then the value of the variable result will be the sum of num1 and num2.

Example :
*/

// Solution :
const num1 = 15;
const num2 = 8;
let results;

if (num1 > num2) {
  console.log((results = num1 * 2));
} else {
  console.log(num1 + num2);
}

// using ternary operator
results = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(results);
