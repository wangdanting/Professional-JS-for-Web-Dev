/**
 * 减少一级array嵌套深度
 * Flattens `array` a single level deep
 * @param {Array} array The array to flatten
 * @returns {Array} Returns the new flattened array
 * @example
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */

import baseFlatten from "../utils/baseFlatten"

function flatten(array) {
  var length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}

export default flatten
