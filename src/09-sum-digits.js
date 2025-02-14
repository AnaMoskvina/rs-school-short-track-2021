/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  if (n < 10) return n;
  let curNum = n;
  while (curNum >= 10) {
    let localSum = 0;
    String(curNum).split('').forEach((item) => {
      localSum += Number(item);
    });
    curNum = localSum;
  }
  return curNum;
}

module.exports = getSumOfDigits;
