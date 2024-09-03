/*
Problem : Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

// Solution :
for (let number = 1; number <= 200; number++) {
  if (number === 100) {
    console.log(number, "Retired");
    break;
  }
  console.log(number);
}
