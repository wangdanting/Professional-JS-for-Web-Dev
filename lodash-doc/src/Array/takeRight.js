/**
 * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素
 * Creates a slice of `array` with `n` elements taken from the end
 * @param {Array} array The array to query
 * @param {number} [n=1] The number of elements to take
 * @returns {Array} Returns the slice of `array`
 * @example
 * takeRight([1, 2, 3])
 * // => [3]
 * takeRight([1, 2, 3], 2)
 * // => [2, 3]
 * takeRight([1, 2, 3], 5)
 * // => [1, 2, 3]
 * takeRight([1, 2, 3], 0)
 * // => []
 */

import toInteger from "../Lang/toInteger"
import baseSlice from "../utils/baseSlice"

function takeRight(array, n) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  n = n === undefined ? 1 : toInteger(n)
  n = length - n
  return baseSlice(array, n < 0 ? 0 : n, length)
}

export default takeRight
