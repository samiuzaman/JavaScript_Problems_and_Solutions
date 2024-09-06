/*
Problem : Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
*/

// Solution :
function odd_even(num) {
  const number = parseInt(num);
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const result = odd_even(6);
console.log(result);
