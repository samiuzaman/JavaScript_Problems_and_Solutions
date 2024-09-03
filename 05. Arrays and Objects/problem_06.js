/*
Problem : Write a JavaScript code to get the even numbers from an array using any looping technique.

Example : 
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output: [12, 98, 78, 46]
*/

// Solution :
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers);
