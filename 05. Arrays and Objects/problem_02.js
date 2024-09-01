/*
Problem : Add or remove elements

Example :
01. Declare an array of 3 tourist destinations
02. Add a new tourist destination to your tourist array
03. Add two more to your array
04. Remove the last tourist destination you have added
05. display the final array as output
*/

// Solution :
// Declare an array of 3 tourist destinations
const touristSpot = [
  "Sajek Valley",
  "Cox's Bazar Beach",
  "Saint Martin Island",
];
console.log(touristSpot);

// Add a new tourist destination to your tourist array
touristSpot.push("Jaflong");
console.log(touristSpot);

// Add two more to your array
touristSpot.splice(touristSpot.length, 0, "Kaptai Lake", "Inani Beach");
console.log(touristSpot);

// Remove the last tourist destination you have added
touristSpot.pop();

// display the final array as output
console.log(touristSpot);
