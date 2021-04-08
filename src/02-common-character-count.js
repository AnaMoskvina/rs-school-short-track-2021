/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const lettersOne = {};
  const lettersTwo = {};
  let counter = 0;

  s1.split('').forEach((letter) => {
    lettersOne[letter] = (lettersOne[letter] ? lettersOne[letter] : 0) + 1;
  });

  s2.split('').forEach((letter) => {
    lettersTwo[letter] = (lettersTwo[letter] ? lettersTwo[letter] : 0) + 1;
  });

  Object.entries(lettersOne).forEach((item) => {
    const key = item[0];
    if (lettersTwo[key]) counter += Math.min(lettersOne[key], lettersTwo[key]);
  });

  return counter;
}

module.exports = getCommonCharacterCount;
