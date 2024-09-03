/*
Problem : Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// Solution :
for (let number = 1; number <= 40; number++) {
  if (number % 2 !== 0) {
    continue;
  }
  console.log(number);
}
