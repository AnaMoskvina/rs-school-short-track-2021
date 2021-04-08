/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const lineLen = matrix[0].length;
  const rowsLen = matrix.length;
  let sum = 0;
  for (let i = 0; i < lineLen; i++) {
    for (let j = 0; j < rowsLen; j++) {
      if (!matrix[j - 1]) sum += matrix[j][i];
      else if (matrix[j - 1][i] !== 0 || !matrix[j - 1]) sum += matrix[j][i];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
