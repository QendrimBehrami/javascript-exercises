/**
 * Remove elements from arr that are part of values
 * @param {Array} arr the original array
 * @param {...Number} values that shall be removed
 */
const removeFromArray = function (arr, ...values) {
  let result = arr;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    result = result.filter((element) => {
      return element !== value;
    });
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
