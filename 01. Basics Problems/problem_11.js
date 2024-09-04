/*
Problem : Capitalize Every first Letter of each word in a String
*/

// Solution :
let text = "You should be able to check whether x exists";

text = text.toLowerCase().split(" ");
for (let item = 0; item < text.length; item++) {
  text[item] = text[item].charAt(0).toUpperCase() + text[item].slice(1);
}
const result = text.join(" ");
console.log(result);
