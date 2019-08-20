/**
 * 计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。
 * Computes the minimum value of `array`. If `array` is empty or false,
 * `undefined` is returned
 * @param {Array} array The array to iterate over
 * @returns {*} Returns the minimum value
 * @example
 * min([4, 2, 8, 6])
 * // => 2
 * min([])
 * // => undefined
 */

import baseExtremum from "../utils/baseExtremum"

function identity(value) {
  return value
}

function baseLt(value, other) {
  return value < other
}

function min(array) {
  return array && array.length
    ? baseExtremum(array, identity, baseLt)
    : undefined
}

export default min
