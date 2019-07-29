/**
 * 获取array数组的第n个元素，如果n为负数，则返回从数组结尾开始的第n个元素
 * Gets the element at index `n` of `array`, if `n` is negative, the nth
 * element from the end is returned
 * @param {Array} array The array to query
 * @param {number} [n=0] The index of the element to return
 * @returns {*} Returns the nth element of `array`
 * @example
 * var array = ['a', 'b', 'c', 'd']
 * nth(array, 1)
 * // => 'b'
 * nth(array, -2)
 * // => 'c'
 */

import baseNth from "../utils/baseNth"
function nth(array, n) {
  return array && array.length ? baseNth(array, n) : undefined
}

export default nth
