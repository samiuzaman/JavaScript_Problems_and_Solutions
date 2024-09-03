/*
Problem : Write a JavaScript code to reverse the array colors without using the reverse method.

Example :
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/

// Solution :

const colors = ["red", "blue", "green", "yellow", "orange"];
let reverseColor = [];
for (let color = colors.length - 1; color >= 0; color--) {
  reverseColor.unshift(colors[color]);
}
console.log(reverseColor);

// or
let reverseColors = [];
for (let color of colors) {
  reverseColors.unshift(color);
}
console.log(reverseColors);
