/*
Problem : The sum of all product prices is in an array of objects.

Example :
*/

// Solution :

const products = [
  { name: "shampoo", price: 300, quantity: 5 },
  { name: "chiruni", price: 100, quantity: 3 },
  { name: "shirt", price: 700, quantity: 2 },
  { name: "pant", price: 1200, quantity: 2 },
];

function sumOfObject(products) {
  let sum = 0;
  for (let product of products) {
    const productCost = product.price * product.quantity;
    sum = sum + productCost;
  }
  return sum;
}
const result = sumOfObject(products);
console.log(result);
