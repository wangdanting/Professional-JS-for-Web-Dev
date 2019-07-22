/**
 * 创建一个新数组，将array与任何数组或值连接在一起
 * Creates a new array concatenating `array` with any additional arrays and/or values
 *
 * @param {Array} array The array to concatenate
 * @param {...*} [values] The values to concatenate
 * @returns {Array} Returns the new concatenated array
 * @example
 *
 * var array = [1];
 * var other = concat(array, 2, [3], [[4]]);
 *
 * console.log(other)
 * // => [1, 2, 3, [4]]
 * console.log(arrat)
 * // => [1]
 */

import arrayPush from "../utils/arrayPush"
import copyArray from "../utils/copyArray"
import baseFlatten from "../utils/baseFlatten"

function concat() {
  var length = arguments.length
  if (!length) {
    return []
  }
  var args = Array(length - 1),
    array = arguments[0],
    index = length

  while (index--) {
    args[index - 1] = arguments[index]
  }
  return arrayPush(
    Array.isArray(array) ? copyArray(array) : [array],
    baseFlatten(args, 1)
  )
}

export default concat
