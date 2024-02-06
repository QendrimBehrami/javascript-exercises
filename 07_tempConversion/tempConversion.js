/**
 *
 * @param {Number} degreesFahrenheit
 */
const convertToCelsius = function (degreesFahrenheit) {
  return (((degreesFahrenheit - 32) * 5) / 9).toFixed(1) * 1.0;
};

/**
 *
 * @param {Number} degreesCelsius
 */
const convertToFahrenheit = function (degreesCelsius) {
  return ((degreesCelsius * 9) / 5 + 32).toFixed(1) * 1.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
