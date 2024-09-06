/*
Problem : Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

// Solution :
const numbers = [12, 41, 24, 18, 37, 19];
function make_avg(allNumbers) {
  let numbersLength = allNumbers.length;
  let sum = 0;
  for (let number of allNumbers) {
    sum += number;
  }
  return sum / numbersLength;
}

const result = make_avg(numbers);
console.log(result);
