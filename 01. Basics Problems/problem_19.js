/*
Problem : Write a function to find the longest word in a given string.

Example : 
sample-input--> I am learning Programming to become a programmer

sample-output: Programming
*/

// Solution :
const text = "I am learning Programming to become a programmer";
const newText = text.split(" ");

function findLargeWord(text) {
  let longestWord = "";
  for (let word of text) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
const result = findLargeWord(newText);
console.log(result);
