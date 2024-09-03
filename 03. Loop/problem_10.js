/*
Problem : Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number.

Example : like 4, 9, 16, etc
*/

// Solution :
for (let number = 1; number <= 100; number++) {
  const squareNumber = number * number;
  if (squareNumber < 100){
    console.log(squareNumber)
  }
  
}
