/**
 * 创建一个数组切片，从array数组的起始元素开始提取n个元素
 * Creates a slice of `array` with `n` elements taken from the beginning
 * @param {Array} array The array to query
 * @param {number} [n=1] The number of elements to take
 * @returns {Array} Returns the slice of `array`
 * @example
 * take([1, 2, 3])
 * // => [1]
 * take([1, 2, 3], 2)
 * // => [1, 2]
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 * take([1, 2, 3], 0)
 * // => []
 */

import toInteger from "../Lang/toInteger"
import baseSlice from "../utils/baseSlice"

function take(array, n) {
  if (!(array && array.length)) {
    return []
  }
  n = n === undefined ? 1 : toInteger(n)
  return baseSlice(array, 0, n < 0 ? 0 : n)
}

export default take
