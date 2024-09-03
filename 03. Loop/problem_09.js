/*
Problem : Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// Solution :
let sum = 0;
for (let number = 1; number <= 100; number++) {
  sum = sum + number;
  if (sum >= 100) {
    break;
  }
  console.log(sum);
}
