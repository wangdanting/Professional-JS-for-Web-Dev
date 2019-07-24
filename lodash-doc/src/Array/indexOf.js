/**
 * Gets the index at which the first occurrence of `value` is found in `array` using [`SameValueZero`]
 * for equality comparisons. If `fromIndex` is negative, it's used as the offset from the end of `array`
 * 使用[`SameValueZero`]等值比较，返回首次value在数组array中被找到的索引值，如果fromIndex为负值，将使用index与数组长度的差值
 * @param {Array} array The array to inspect
 * @param {*} value The value to search for
 * @param {number} [fromIndex=0] The index to search from
 * @returns {number} Returns the index of the matched value, else `-1`
 * @example
 * indexOf([1, 2, 1, 2], 2)
 * // -> 1
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */

import toInteger from "../Lang/toInteger"
import baseIndexOf from "../utils/baseIndexOf"

function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex)
  if (index < 0) {
    index = Math.max(length + index, 0)
  }
  return baseIndexOf(array, value, index)
}

export default indexOf
