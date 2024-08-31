/*
Problem : Free Drinks
        - Burger more than 500tk: free Coke
        - Else Coke: 30tk

Example :
          Free Coke 
          or
          Buy Coke 30tk
*/

// Solution :
const totalPrice = 400;

if (totalPrice >= 500) {
  console.log("Free Coke");
} else {
  console.log("Buy coke 30tk");
}