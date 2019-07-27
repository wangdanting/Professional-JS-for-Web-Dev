/**
 * 获取array中的最后一个元素
 * Gets the last element of `array`
 * @param {Array} array The array to query
 * @returns {*} Returns the last element of `array`
 * @example
 * last([1, 2, 3])
 * // => 3
 * last('1234')
 * // => 4
 */

function last(array) {
  var length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}

export default last
