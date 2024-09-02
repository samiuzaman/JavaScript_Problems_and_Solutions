/*
Problem :
Subtask-1: Implement a countdown timer that counts down from 81 to 65 (For Loop).
Subtask-2: Implement a countdown timer that counts down from 21 to 15 (While Loop).

Example1 : 81 80 79 78 77 75 74
Example2 : 21 20 19 18 17 16 15
*/

// Solution :
// For Loop Problem
for (let i = 81; i >= 65; i--) {
  console.log(i);
}

// While Loop Problem
let n = 21;
while (n >= 15) {
  console.log(n);
  n--;
}
