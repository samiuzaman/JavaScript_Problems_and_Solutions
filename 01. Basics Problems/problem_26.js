/*
Problem : Finding the higher range price phone in an Array of Object.
*/

// Solution :
const phoneLists = [
  { name: "Samsung S24", price: 125000, fastCharging: true, color: "White" },
  { name: "Pixel 8", price: 95000, fastCharging: true, color: "Black" },
  { name: "Iphone 15", price: 135000, fastCharging: true, color: "Blue" },
  { name: "Xiaomi 14", price: 48500, fastCharging: true, color: "Orange" },
  { name: "OnePlus 9R", price: 65000, fastCharging: true, color: "Purple" },
  { name: "Honor X9b", price: 39999, fastCharging: true, color: "Red" },
];

function higherRangeMobile(phones) {
  let higherRangeMobile = phones[0];
  for (let phone of phones) {
    if (higherRangeMobile.price < phone.price) {
      higherRangeMobile = phone;
    }
  }
  return higherRangeMobile;
}
const result = higherRangeMobile(phoneLists);
console.log(result);
