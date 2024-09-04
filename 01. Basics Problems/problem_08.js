/*
Problem : Check whether a string contains all the vowels a, e, i, o, u
*/

// Solution :
const paragraph = "JavaScript is a programming Language";
// const lowerPara = paragraph.toLowerCase();
let vowel = ["a", "e", "i", "o", "u"];
let allVowel = true;
for (let i = 0; i < 5; i++) {
  if (!paragraph.includes(vowel[i])) {
    allVowel = false;
    break;
  }
}

console.log(allVowel);
