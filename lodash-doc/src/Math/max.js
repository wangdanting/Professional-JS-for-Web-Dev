/**
 * 计算array中的最大值，如果array是空的或者是非数组则返回undefined
 * computes the maximum value of `array`. If `array` is empty or falsey
 * `undefined` is returned.
 * @param {Array} array The array to iterate over
 * @returns {*} Returns the maximum value
 * @example
 * max([4, 2, 8, 6]);
 * // => 8
 * max([])
 * // => undefined
 */

import baseExtremum from "../utils/baseExtremum"

function identity(value) {
  return value
}

function baseGt(value, other) {
  return value > other
}

function max(array) {
  return array && array.length
    ? baseExtremum(array, identity, baseGt)
    : undefined
}

export default max
