/**
 * 获取除了array数组第一个元素以外的全部元素
 * Gets all but the first element of `array`
 * @param {Array} array The array to query
 * @returns {Array} Returns the slice of `array`
 * @example
 * tail([1, 2, 3])
 * // => [2, 3]
 */

import baseSlice from "../utils/baseSlice"
function tail(array) {
  var length = array == null ? 0 : array.length
  return length ? baseSlice(array, 1, length) : []
}

export default tail
