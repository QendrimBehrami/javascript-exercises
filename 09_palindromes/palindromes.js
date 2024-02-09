/**
 * Check if a string is a palindrome
 * Ignores white space, punctuation
 * Case-insensitive
 * @param {String} str
 */
const palindromes = function (str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    // First move the pointers to first valid location
    while (!isAlphanumeric(str[left])) {
      left++;
    }
    while (!isAlphanumeric(str[right])) {
      right--;
    }

    // Exit if they don't point to the same character (case-insensitive)
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    // Move to the next character
    left++;
    right--;
  }
  // At this point all characters must have matched, so we can return true
  return true;
};

/**
 * Test if a single char is alphanumeric
 * @param {String} char
 * @returns true if char is a letter or number
 */
function isAlphanumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
