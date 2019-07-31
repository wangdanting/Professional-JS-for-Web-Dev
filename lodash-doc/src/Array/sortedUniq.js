/**
 * 创建一个去重后的数组副本，这只会优化已经排序好的数组
 * Creates a duplicate-free version of an array and it's designed and optimized for sorted arrays
 * @param {Array} array The array to inspect
 * @returns {Array} Returns the new duplicate free array
 * @example
 * sortedUniq([1, 1, 2, 4, 4]
 * // => [1, 2, 4]
 */

import baseSortedUniq from "../utils/baseSortedUniq"

function sortedUniq(array) {
  return array && array.length ? baseSortedUniq(array) : []
}

export default sortedUniq
