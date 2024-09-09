/*
Problem : Generate a random number between 10 to 20.
*/

// Solution :

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const result = getRandomNumber(10, 20);
console.log(result);
