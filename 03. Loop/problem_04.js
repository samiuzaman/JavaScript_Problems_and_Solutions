/*
Problem :
Subtask-1: Generate a multiplication table for number 9 (For Loop)?
Subtask-2: As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5 (While Loop)?

Example :
9 * 1 = 9
9 * 2 = 18 
9 * 3 = 27 
9 * 4 = 36 
9 * 5 = 45 
9 * 6 = 54 
9 * 7 = 63 
9 * 8 = 72 
9 * 9 = 81 
9 * 10 = 90
*/

// Solution :
// For Loop Problem
let number = 9;
for (let mul = 1; mul <= 10; mul++) {
  const result = number * mul;
  console.log(`${number} * ${mul} = ${result}`);
}

// While Loop Problem
let number = 5;
let mul = 1;
while (mul <= 10) {
  const result = number * mul;
  console.log(`${number} * ${mul} = ${result}`);
  mul++;
}
