/*
Problem : Count how many times a string has the letter a
*/

// Solution :

const names = "JavaScript is A programming Language";
const nameLen = names.length;
let count = 0;
for (let i = 0; i < nameLen; i++) {
  if (names[i] == "a" || names[i] == "A") {
    count += 1;
  }
}
console.log(count);
