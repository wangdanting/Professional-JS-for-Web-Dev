/**
 * 计算 array 中值的总和
 * Computes the sum of the values in `array`
 * @param {Array} array The array to iterate over
 * @returns {number} Returns the sum
 * @example
 * sum([4, 2, 8, 6])
 * // => 20
 */

import baseSum from "../utils/baseSum"

function identity(value) {
  return value
}

function sum(array) {
  return array && array.length ? baseSum(array, identity) : 0
}

export default sum
