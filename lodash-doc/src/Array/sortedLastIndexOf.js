/**
 * 这个方法类似 _.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。
 * This method is like `lastIndexOf` except that it performs a binary search on a sorted `array`
 * @param {Array} array The array to inspect
 * @param {*} value The value to search for
 * @returns {number} Returns the index of the matched value, else `-1`
 * @example
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5)
 * // => 3
 */

import baseSortedIndex from "../utils/baseSortedIndex"
import eq from "../Lang/eq"

function sortedLastIndexOf(array, value) {
  var length = array == null ? 0 : array.length
  if (length) {
    var index = baseSortedIndex(array, value, true) - 1
    if (eq(array[index], value)) {
      return index
    }
  }
  return -1
}

export default sortedLastIndexOf
