/*
Problem : Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Example : Input: const statement = 'I am a hard working person'

Output: 'person working hard a am I'
*/

// Solution :
// Function Use in reverse
/*
const statement = "I am a hard working person";
let strArr = statement.split(" ");
strArr.reverse();
const strResult = strArr.join(" ")
console.log(strResult);
*/

// Row code in reverse
const statement = "I am a hard working person";
let strArr = statement.split(" ");
let reverseStr = [];

for (let item of strArr) {
  reverseStr.unshift(item);
}
let convertStr = reverseStr.join(" ");
console.log(convertStr);
