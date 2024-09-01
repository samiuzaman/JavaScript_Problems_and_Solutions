/*
Problem :
Subtask-1: Find all the odd numbers from 61 to 100.

Subtask-2: Find all the even numbers from 78 to 98.
*/

// Solution :
// For Loop Odd Number
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// While Loop Odd Number
let i = 61;
while (i <= 100) {
  console.log(i);
  i += 2;
}

// For Loop Even Number
for (let e = 78; e <= 98; e++) {
  if (e % 2 === 0) {
    console.log(e);
  }
}

// While Loop Odd Number
let e = 78;
while (e <= 98) {
  console.log(e);
  e += 2;
}
