/*
Problem : Checking Array Membership with ‘includes’

Example :
01. Create an array of books containing different book.
02. Use the includes method to check if the array contains a javascript book.
03. Print a message to the console indicating whether the element is present in the array or not.
*/

// Solution :

// Create an array of books containing different book
const books = [
  "Programming Pearls",
  "Effective Java",
  "Learning Python",
  "JavaScript",
  "The C++ Programming",
];
const checkBook = books.includes("JavaScript");
console.log(checkBook);
