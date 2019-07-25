/**
 * 创建一个切片数组，去除array前面的n个元素(n默认值为1)
 * Creates a slice of `array` with `n` elements dropped from the beginning
 * @param {Array} array The array to query
 * @param {number} [n=1] The number of elements to drop
 * @param {Object} [guard] Enables use as an iteratee for methods like `map`
 * @returns {Array} Returns the slice of `array`
 * @example
 * drop([1, 2, 3])
 * // => [2, 3]
 * drop([1, 2, 3], 2)
 * // => [3]
 * drop([1, 2, 3],5)
 * // => []
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */

import toInteger from "../Lang/toInteger"
import baseSlice from "../utils/baseSlice"
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  n = guard || n === undefined ? 1 : toInteger(n)
  return baseSlice(array, n < 0 ? 0 : n, length)
}

export default drop
