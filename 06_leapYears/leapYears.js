/** Determine if the year was a leap year
 * Can probably be coded better, but I find it very readable
 * @param {Number} year
 * @return {Boolean}
 */
const leapYears = function (year) {
  // Not leap year if year is not multiple of 4 (e.g. 2003)
  if (year % 4 != 0) {
    return false;
  }
  // Also not leap year if year is multiple of 100, but not 400
  if (year % 100 == 0 && year % 400 != 0) {
    return false;
  }
  return true;
};

// Do not edit below this line
module.exports = leapYears;
