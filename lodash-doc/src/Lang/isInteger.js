/**
 * 检查`value`是否是整数
 * Checks if `value` is an integer.
 * **Note:** This method is based on Number.isInteger
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`
 * @example
 *
 * isInteger(3)
 * // => true
 *
 * isInteger(Number.MIN_VALUE)
 * // => false
 *
 * isInteger(Infinity)
 * // => false
 *
 * isInteger('3')
 * // => false
 */

import toInteger from "./toInteger"
function isInteger(value) {
  return typeof value == "number" && value === toInteger(value)
}

export default isInteger
