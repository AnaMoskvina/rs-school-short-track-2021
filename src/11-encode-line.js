/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) return '';
  let result = '';
  let counter = 0;
  let currentLetter = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== currentLetter) {
      result += `${counter > 1 ? counter : ''}${currentLetter}`;
      currentLetter = str[i];
      counter = 1;
    } else {
      counter++;
    }
  }
  result += `${counter > 1 ? counter : ''}${currentLetter}`;
  return result;
}

module.exports = encodeLine;
