/*
Problem : Write a function to convert temperature from Celsius to Fahrenheit.

Example : Input -> 12; Ouptput -> 53.6
*/

// Solution :
function celsiusToFahrenheit(c) {
  const f = (c * 9) / 5 + 32;
  return f;
}

const result = celsiusToFahrenheit(12);
console.log(result);
