const add = function (a, b) {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
};

const subtract = function (a, b) {
  a = parseInt(a);
  b = parseInt(b);
  return a - b;
};

/**
 *
 * @param {Array} numbers
 */
const sum = function (numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += parseInt(numbers[i]);
  }
  return result;
};

const multiply = function (numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= parseInt(numbers[i]);
  }
  return result;
};

const power = function (base, exponent) {
  base = parseInt(base);
  exponent = parseInt(exponent);
  return base ** exponent;
};

const factorial = function (n) {
  let result = 1;
  for (i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
