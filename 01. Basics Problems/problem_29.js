/*
Problem : Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

// Solution :
function calculateElectronicsBudget(
  laptopQuality,
  tabletQuality,
  mobileQuality
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const totalLaptopCost = laptop * laptopQuality;
  const totaltabletCost = tablet * tabletQuality;
  const totalMobileCost = mobile * mobileQuality;

  const totalCost = totalLaptopCost + totaltabletCost + totalMobileCost;
  return totalCost;
}
const result = calculateElectronicsBudget(1, 2, 3);
console.log(result);
