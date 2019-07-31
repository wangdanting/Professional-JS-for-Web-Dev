/**
 * 创建一个去重后的array数组副本，使用了全等比较，只有第一次出现的元素才会被保留
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur in the array
 *
 * @param {Array} array The array to inspect
 * @returns {Array} Returns the new duplicate free array
 * @example
 * uniq([2, 1, 2, NaN, NaN])
 * // => [2, 1, NaN]
 */

import baseUniq from "../utils/baseUniq"

function uniq(array) {
  return array && array.length ? baseUniq(array) : []
}

// es6
// function uniq(array) {
//   return array && array.length ? new Set(array) : []
// }

export default uniq
