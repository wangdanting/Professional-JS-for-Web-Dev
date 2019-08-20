/**
 * 计算array的平均值
 * Computes the mean of the values in `array`
 * @param {Array} array The array to iterate over
 * @returns {number} Returns the mean
 * @example
 * mean([4, 2, 8, 6])
 * // => 5
 */

import baseMean from "../utils/baseMean"

function identity(value) {
  return value
}

function mean(array) {
  return baseMean(array, identity)
}

export default mean
