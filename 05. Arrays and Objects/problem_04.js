/*
Problem : Checking if it's an Array

Example :
01. Create different variables, each containing either an array or a non-array value.
02. Now use isArray to check if each variable is an array.
03. Print a message to the console indicating whether each variable is an array or not.
*/

// Solution :

// Create different variables, each containing either an array or a non-array value.
const person = { fullName: "Rahat Chowdhury", age: 22 };
const numbers = [22, 33, 44, 55, 66];

const personResult = Array.isArray(person);
console.log(personResult);

const numbersResult = Array.isArray(numbers);
console.log(numbersResult);
