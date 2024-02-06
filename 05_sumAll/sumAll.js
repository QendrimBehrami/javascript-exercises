/**
 * Compute the sum of all numbers between a and b
 * @param {Number} a
 * @param {Number} b
 */
const sumAll = function (a, b) {
  // Only allow positive numbers
  if (typeof a != "number" || a < 0 || typeof b != "number" || b < 0) {
    return "ERROR";
  }
  let lower = Math.min(a, b);
  let upper = Math.max(a, b);

  // Apply Gauss sum for ranges
  return 0.5 * ((lower + upper) * (upper - lower + 1));
};

// Do not edit below this line
module.exports = sumAll;
