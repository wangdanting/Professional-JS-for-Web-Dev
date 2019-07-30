/**
 * 使用二进制的方式检索来决定value值应该插入到数组中尽可能大的索引位置，以保证数组的排序
 * Uses a binary search to determine the highest index at which `value` should
 * be inserted into `array` in order to maintain its sort order
 * @param {Array} array The sorted array to inspect
 * @param {*} value The value to evaluate
 * @returns {number} Returns the index at which `value` should be inserted into `array`
 * @example
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */

import baseSortedIndex from "../utils/baseSortedIndex"

function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true)
}

export default sortedLastIndex
