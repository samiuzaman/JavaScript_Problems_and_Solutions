/*
Problem : You are given an array of numbers. Count how many times the a number is repeated in the array.

Example1 :
sample-input: numbers = [5,6,11,12,98, 5]

find: 5
output: 2

Example1 :
sample-input: numbers = [5,6,11,12,98, 5]

find: 25
output: 0
*/

// Solution :
const numbers = [5, 6, 11, 12, 98, 5];
function findNumber(n, f) {
  let count = 0;
  for (let num of n) {
    if (num === f) {
      count++;
    } else {
      count += 0;
    }
  }
  return count;
}
const result = findNumber(numbers, 5);
console.log(result);

const result2 = findNumber(numbers, 25);
console.log(result2);
