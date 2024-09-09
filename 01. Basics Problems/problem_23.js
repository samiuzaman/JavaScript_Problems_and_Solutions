/*
Problem : Finding 2nd largest integer number of an Array.

Example :
*/

// Solution :
const marks = [73, 65, 88, 68, 94, 76, 82];
function secondLargestNumber(numbers) {
  let largestNumber = numbers[0];
  let secondLargestNumber = numbers[0];
  for (let number of numbers) {
    if (largestNumber < number) {
      secondLargestNumber = largestNumber;
      largestNumber = number;
    }
  }
  return secondLargestNumber;
}
const result = secondLargestNumber(marks);
console.log(result);
