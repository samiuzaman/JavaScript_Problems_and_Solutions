/*
Problem : Ticket fare Calculator

Example :
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Solution :

let ticketPrice = 800;
let personAge = 65;
let students = false;

if (personAge < 10) {
  console.log("Ticket Free");
} else if (students) {
  discountPrice = (ticketPrice * 50) / 100;
  result = ticketPrice - discountPrice;
  console.log("Ticket Price = " + result);
} else if (personAge >= 60) {
  discountPrice = (ticketPrice * 15) / 100;
  result = ticketPrice - discountPrice;
  console.log("Ticket Price = " + result);
} else {
  console.log("Ticket Price = " + ticketPrice);
}
