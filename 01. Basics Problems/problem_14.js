/*
Problem : Calculate the average of the odd Numbers in an Array?
*/

// Solution :
const numbers = [42, 13, 58, 65, 81, 96, 7, 5];

function average(numbers) {
  const odds = [];
  for (let number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }

  let sum = 0;
  for (let number of odds) {
    sum += number;
  }
  const averageNumber = sum / odds.length;
  return averageNumber;
}
const result = average(numbers);
console.log(result);
