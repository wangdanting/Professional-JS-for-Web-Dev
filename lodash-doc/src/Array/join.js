/**
 * 将array中所有的元素转换为由separator分隔的字符串
 * Converts all elements in `array` into a string separated by `separator`
 *
 * @param {Array} array The array to convert
 * @param {string} [separator=','] The element separator
 * @returns {string} Returns the joined string
 * @example
 * join(['a', 'b', 'c'], '~')
 * // => 'a~b~c'
 */

function join(array, separator) {
  return array == null ? "" : Array.prototype.join.call(array, separator)
}

export default join
