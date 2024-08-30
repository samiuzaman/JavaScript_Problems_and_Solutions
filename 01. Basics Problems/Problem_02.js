/*
Problem : Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Output: Print the result in 2 decimal places.

Example Input: 75.45, 65, 80, 99

Example Output: 72.8
*/

// Solution :
let mathematics = 75;
let biology = 45;
let chemistry = 65;
let physics = 80;
let bangla = 99;

let totalMarks = mathematics + biology + chemistry + physics + bangla;

let averageMarks = totalMarks / 5;
console.log(averageMarks);
