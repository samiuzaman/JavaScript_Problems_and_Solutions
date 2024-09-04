/*
Problem : Count the number of properties.

Example :
Input: let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

Output: 4
*/

// Solution :
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const count = Object.keys(student).length;
console.log(count);
