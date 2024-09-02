let sum = 0;
for (let number = 206; number <= 311; number++) {
  if (number % 2 === 0) {
    sum += number;
  }
}
console.log("Total Sum = " + sum);