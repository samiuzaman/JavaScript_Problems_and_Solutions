/*
Problem : Loop through an object and print the key-value pairs with their types

Example :
Input: let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true,
}

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/

// Solution :
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (let item in myObject) {
  const result = `${item} : ${myObject[item]} | Type :${typeof myObject[item]}`;
  console.log(result);
}
