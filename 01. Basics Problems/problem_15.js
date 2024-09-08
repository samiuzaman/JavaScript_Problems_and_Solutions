/*
Problem : Remove the duplicate items from an Array?
*/

// Solution :
const friends = [
  "Steven",
  "Lucas",
  "Peter",
  "Tyler",
  "Lucas",
  "Jordan",
  "Peter",
  "Tyler",
];

function removeDuplicate(array) {
  const uniquefriends = [];
  for (let friend of friends) {
    if (uniquefriends.includes(friend) === false) {
      uniquefriends.push(friend);
    }
  }
  return uniquefriends;
}
const result = removeDuplicate(friends);
console.log(result);
