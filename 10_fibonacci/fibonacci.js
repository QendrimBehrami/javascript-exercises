const GOLDEN_RATIO = 0.5 * (1 + Math.sqrt(5));
const GOLDEN_RATIO_INVERSE_NEGATIVE = -1.0 / GOLDEN_RATIO;

/**
 * Calculate the fibonacci number according to the closed-form formula
 * https://en.wikipedia.org/wiki/Fibonacci_sequence#Closed-form_expression
 * @param {Number} n
 * @returns the n-th fibonacci number
 */
const fibonacci = function (n) {
  // Validate input
  if (n < 0) {
    return "OOPS";
  }

  return Math.round(
    (GOLDEN_RATIO ** n - GOLDEN_RATIO_INVERSE_NEGATIVE ** n) / Math.sqrt(5)
  );
};

// Do not edit below this line
module.exports = fibonacci;
