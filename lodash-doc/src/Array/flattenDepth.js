/**
 * 根据depth递归减少array的嵌套层级
 * Recursively flatten `array` up to `depth` times.
 * @param {Array} The array to flatten
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * var array = [1, [2, [3, [4]], 5]]
 * flattenDepth(array, 1)
 * // =>  [1, 2, [3, [4]], 5]
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */

import toInteger from "../Lang/toInteger"
import baseFlatten from "../utils/baseFlatten"

function flattenDepth(array, depth) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  depth = depth === undefined ? 1 : toInteger(depth)
  return baseFlatten(array, depth)
}

export default flattenDepth
