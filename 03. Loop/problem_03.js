/*
Problem :
Subtask-1: Display sum of all the odd numbers from 91 to 129 (For Loop).

Subtask-2: Display sum of all the even numbers from 51 to 85. (For Loop).

Subtask-3: Display sum of all the odd numbers from 81 to 131 (while Loop).

Subtask-2: Display sum of all the even numbers from 206 to 311 (while Loop).
*/

// Solution :

// For Loop: sum of all the odd numbers
let sum = 0;
for (let number = 91; number <= 129; number++) {
  if (number % 2 !== 0) {
    sum += number;
  }
}
console.log("Total Sum = " + sum);

// While Loop: sum of all the odd numbers
let number = 81;
let sum = 0;
while (number <= 131) {
  if (number % 2 !== 0) {
    sum += number;
  }
  number++;
}
console.log(sum);

// For Loop: sum of all the even numbers
let sum = 0;
for (let number = 51; number <= 85; number++) {
  if (number % 2 === 0) {
    sum += number;
  }
}
console.log("Total Sum = " + sum);

// While Loop: sum of all the odd numbers
let number = 206;
let sum = 0;
while (number <= 311) {
  if (number % 2 === 0) {
    sum = sum + number;
  }
  number++;
}
console.log(sum);
