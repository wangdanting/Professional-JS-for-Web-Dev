/**
 * 这个方法类似indexOf,除了它是在已经排序的数组array上执行二进制检索
 * This method is like `indexOf` except that it performs a binary search on a sorted `array`
 * @param {Array} array The array to inspect
 * @param {*} value The value to search for
 * @returns {number} Returns the index of the matched value, else `-1`
 * @example
 * sortedIndexOf([4, 5, 5, 5, 6], 5)
 * // => 1
 */

import baseSortedIndex from "../utils/baseSortedIndex"
import eq from "../Lang/eq"

function sortedIndexOf(array, value) {
  var length = array == null ? 0 : array.length
  if (length) {
    var index = baseSortedIndex(array, value)
    if (index < length && eq(array[index], value)) {
      return index
    }
  }
  return -1
}

export default sortedIndexOf
