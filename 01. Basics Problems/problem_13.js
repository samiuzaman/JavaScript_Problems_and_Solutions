/*
Problem : Convert Inci to Feet

Example: 
input: 68
output : 5 ft 8 inci 
*/

// Solution :
function inciToFeet(inci) {
  const feet = parseInt(inci / 12);
  const remainInci = inci % 12;
  return `${feet} ft ${remainInci} inci`;
}

const result = inciToFeet(68);
console.log(result);
