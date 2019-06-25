/**
 * 转换value为整数
 * Converts `value` to an integer.
 *
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * toInteger(3.3)
 * // => 3
 *
 * toInteger('3.3')
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger(-3.3)
 * // => -3
 *
 * toInteger(new Date())
 * // => 1561453581720
 *
 * toInteger(() => {})
 * // => 0
 */
import toFinite from "./toFinite"

function toInteger(value) {
  var result = toFinite(value)
  var remainder = result % 1
  return result === result ? (remainder ? result - remainder : result) : 0
}

// es6
// const toInteger = value => {
//   var result = toFinite(value)
//   return Math.trunc(result)
// }

export default toInteger
