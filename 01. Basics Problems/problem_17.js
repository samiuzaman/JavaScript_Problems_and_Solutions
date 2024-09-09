/*
Problem : Write a function to count the number of vowels in a string.
*/

// Solution :
const str = "Programming Language";
function countVowels(str) {
  let count = 0;
  for (let letter = 0; letter < str.length; letter++) {
    if (
      str[letter] === "a" ||
      str[letter] === "e" ||
      str[letter] === "i" ||
      str[letter] === "o" ||
      str[letter] === "u"
    ) {
      count++;
    }
  }
  return count;
}
const result = countVowels(str);
console.log(result);
