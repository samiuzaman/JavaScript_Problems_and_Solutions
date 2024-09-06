/*
Problem : Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

// Solution :
const binaryString = "10011010011";

function count_zero(str) {
  const strLength = str.length;
  let count = 0;
  for (let i = 0; i <= strLength; i++) {
    if (str[i] === "0") {
      count++;
    }
  }
  return count;
}

const result = count_zero(binaryString);
console.log("Total 0 is = ", result);
