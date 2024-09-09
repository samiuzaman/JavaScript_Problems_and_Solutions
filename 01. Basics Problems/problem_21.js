/*
Problem : Finding 1st largest integer number of an Array.
*/

// Solution :
const marks = [73, 65, 88, 68, 94, 76, 82];
function fundLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let number of numbers) {
    if (largestNumber < number) {
      largestNumber = number;
    }
  }
  return largestNumber;
}

const result = fundLargestNumber(marks);
console.log(result);
