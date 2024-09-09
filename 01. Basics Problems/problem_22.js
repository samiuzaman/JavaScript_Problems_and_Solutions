/*
Problem : Finding 1st smallest number of an Array.

Example :
*/

// Solution :
const marks = [73, 65, 88, 68, 94, 76, 82];

function findSmallestNumber(numbers) {
  let smallestNumber = numbers[0];
  for (let number of numbers) {
    if (smallestNumber > number) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
}
const result = findSmallestNumber(marks);
console.log(result);
