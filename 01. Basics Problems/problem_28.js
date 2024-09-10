/*
Problem : Find the friend with the smallest name.

Example : output -> ron
*/

// Solution :
const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
function findSmallestName(names) {
  let smallestName = names[0];
  for (let name of names) {
    if (smallestName.length > name.length) {
      smallestName = name;
    }
  }
  return smallestName;
}
const result = findSmallestName(friends);
console.log(result);
