/*
Problem : For this object below add a property named passenger capacity with value 5

Example :
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

*/

// Solution :
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  "passenger capacity": 5,
};
console.log(car["passenger capacity"]);
