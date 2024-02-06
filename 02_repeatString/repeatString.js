/**
 *
 * @param {string} str
 * @param {Number} n
 */
const repeatString = function (str, n) {
  if (n < 0) {
    return "ERROR";
  } else if (!str || n == 0) {
    return "";
  } else if (n === 1) {
    return str;
  } else return str + repeatString(str, n - 1);
};

// Do not edit below this line
module.exports = repeatString;
