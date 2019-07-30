/**
 * 使用二进制的方式检索来决定value值应该插入到数组中尽可能小的索引位置，以保证数组的排序
 * Uses a binary search to determine the lowest index at which `value` should be inserted
 * into `array` in order to maintain its sort order.
 * @param {Array} array The sorted array to inspect
 * @param {*} value The value to evaluate
 * @returns {number} Returns the index at which `value` should be inserted into `array`
 * @example
 * sortedIndex([30, 50], 40)
 * // => 1
 */

import baseSortedIndex from "../utils/baseSortedIndex"

function sortedIndex(array, value) {
  return baseSortedIndex(array, value)
}

export default sortedIndex
