/*
Problem : Finding 2st smallest number of an Array.
*/

// Solution :
const marks = [73, 65, 88, 68, 94, 76, 82];
function find2ndSmallestNumber(numbers) {
  let smallestNumber = numbers[0];
  let secondSmallestNumber = numbers[0];
  for (let number of numbers) {
    if (smallestNumber > number) {
      secondSmallestNumber = smallestNumber;
      smallestNumber = number;
    } else if (secondSmallestNumber > number) {
      secondSmallestNumber = number;
    }
  }
  return secondSmallestNumber;
}
const result = find2ndSmallestNumber(marks);
console.log(result);
