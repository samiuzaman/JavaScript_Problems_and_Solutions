/*
Problem : Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

// Solution :
function multiplyOrDivide(number) {
  if (number % 2 === 0) {
    const mul = number / 2;
    return mul;
  } else {
    const div = number * 2;
    return div;
  }
}
const result = multiplyOrDivide(6);
console.log(result);
