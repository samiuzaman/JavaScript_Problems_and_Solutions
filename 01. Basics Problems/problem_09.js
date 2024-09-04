/*
Problem : Check whether a string contains all the g, p, s, t
*/

// Solution :
const strings =
  "A programming language is programmers to communicate with computers.";
let words = ["g", "p", "s", "w"];
let allWords = true;

for (let item = 0; item < words.length; item++) {
  if (!strings.includes(words[item])) {
    allWords = false;
    break;
  }
}
console.log(allWords)
