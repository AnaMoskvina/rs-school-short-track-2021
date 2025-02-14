/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let min = 0;
  let max = array.length - 1;
  let middle = Math.floor((min + max) / 2);
  while (min <= max && array[middle] !== value) {
    if (value < array[middle]) max = middle - 1;
    else min = middle + 1;
    middle = Math.floor((min + max) / 2);
  }
  return array[middle] === value ? middle : null;
}

module.exports = findIndex;
