/**
 * This method is like `indexOf` except that it iterates over elements of `array` from right to left.
 * 这个方法类似indexOf,区别是它从右到左遍历array的元素
 *
 * @param {Array} array The array to inspect
 * @param {*} value The value to search for
 * @param {number} [fromIndex=array.length-1] The index to search from
 * @returns {number} Returns the index of the matched value, else `-1`
 * @example
 * lastIndexOf([1, 2, 1, 2], 2);
 * // => 3
 * lastIndexOf([1, 2, 1, 2], 2, 2);
 * // => 1
 */

import toInteger from "../Lang/toInteger"
import baseFindIndex from "../utils/baseFindIndex"
import baseIsNaN from "../utils/baseIsNaN"

// '==='
function strictLastIndexOf(array, value, fromIndex) {
  var index = fromIndex + 1
  while (index--) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

function lastIndexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  var index = length
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex)
    index =
      index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }
  return value === value
    ? strictLastIndexOf(array, value, index)
    : baseFindIndex(array, baseIsNaN, index, true)
}

export default lastIndexOf
