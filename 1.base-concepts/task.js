"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

console.log('Massive: ' + solveEquation(4, 8, 2));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentN = Number(percent);
  let contributionN = Number(contribution);
  let amountN = Number(amount);
  let countMonthsN = Number(countMonths);

  let monthPercent = percentN / 12 / 100;
  let creditBody = amountN - contributionN;
  let monthPay = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonthsN) - 1)));
  let creditSum = monthPay * countMonths;

  return Number(creditSum.toFixed(2));
}

console.log(calculateTotalMortgage(15, 500, 10000, 36));