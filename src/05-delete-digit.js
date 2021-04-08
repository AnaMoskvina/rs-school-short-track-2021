/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const len = arr.length;
  let max = -Infinity;
  for (let i = 0; i < len; i++) {
    const copyArr = arr.slice();
    copyArr.splice(i, 1);
    const remainingNum = +copyArr.join('');
    max = Math.max(max, remainingNum);
  }
  return max;
}

module.exports = deleteDigit;
