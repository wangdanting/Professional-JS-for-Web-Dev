/**
 * 获取数组array中除了最后一个的所有元素(去除数组array中的最后一个元素, 返回新数组)
 * Gets all but the last element of `array`
 * @param {Array} array The array to query
 * @returns {Array} Returns the slice of `array`
 * @example
 * initial([1, 2, 3])
 * // => [1, 2]
 */
import baseSlice from "../utils/baseSlice"

function initial(array) {
  var length = array == null ? 0 : array.length
  return length ? baseSlice(array, 0, length - 1) : []
}

export default initial
