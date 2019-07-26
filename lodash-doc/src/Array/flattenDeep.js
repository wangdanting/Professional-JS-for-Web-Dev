/**
 * 将array递归为一维数组
 * @param {Array} array The array to flattens
 * @returns {Array} Returns the new flattened array
 * @example
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */

import baseFlatten from "../utils/baseFlatten"

const INFINITY = 1 / 0

function flattenDeep(array) {
  var length = array == null ? 0 : array.length
  return length ? baseFlatten(array, INFINITY) : []
}

export default flattenDeep
