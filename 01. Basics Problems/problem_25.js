/*
Problem :  Use add and multiplication to calculate Shirts, Pants and Shoes requirements;

Example :
shirt price --> 500 tk
pant price --> 600 tk
shoe price --> 900 tk
*/

// Solution :
function totalPrice(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 600;
  const shoePrice = 900;

  const totalShirtPrice = shirtPrice * shirtQuantity;
  const totalPantPrice = pantPrice * pantQuantity;
  const totalShoePrice = shoePrice * shoeQuantity;

  const allPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
  return allPrice;
}
const result = totalPrice(2, 3, 1);
console.log(result);
