/**
 * 使用value值来填充(替换)array, 从start位置开啊是，到end位置结束(但不包含end位置)。
 * 这个方法会改变array（不是创建新数组）
 * Fills elements of `array` with `value` from `start` up to, but not including `end`
 * **Note:** This method mutates `array`
 *
 * @param {Array} array The array to fill
 * @param {*} value The value to fill `array` with
 * @param {number} [start=0] The start position
 * @param {number} [end=array.length] The end position
 * @returns {Array} Returns `array`
 * @example
 *
 * var array = [1, 2, 3];
 * fill(array, 'a')
 * // => ['a', 'a', 'a']
 * fill(Array(3), 2)
 * // => [2, 2, 2]
 * fill([4, 6, 8, 10], '*', 1, 3)
 * // => [4, '*', '*', 10]
 */

import toInteger from "../Lang/toInteger"
import toLength from "../Lang/toLength"

function baseFill(array, value, start, end) {
  var length = array.length

  start = toInteger(start)
  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end === undefined || end > length ? length : toInteger(end)
  if (end < 0) {
    end += length
  }
  end = start > end ? 0 : toLength(end)
  while (start < end) {
    array[start++] = value
  }
  return array
}

function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  if (start && typeof start !== "number") {
    start = 0
    end = length
  }
  return baseFill(array, value, start, end)
}

export default fill
