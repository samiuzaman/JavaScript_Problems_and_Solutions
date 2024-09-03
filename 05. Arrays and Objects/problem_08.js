/*
Problem : Write a JavaScript code to reverse the array colors without using the reverse method.

Example :
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/

// Solution :

const colors = ["red", "blue", "green", "yellow", "orange"];
for (let color = colors.length - 1; color >= 0; color--) {
  console.log(colors[color]);
}
