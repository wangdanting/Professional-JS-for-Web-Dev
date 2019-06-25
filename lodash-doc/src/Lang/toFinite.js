/**
 * 转换value为一个有限的数字
 * Converts `value` to a finite number.
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number
 * @example
 *
 * toFinite(3.3)
 * // => 3.3
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 *
 * toFinite(NaN)
 * // => 0
 *
 * toFinite(new Date())
 * // => 1561430693003
 *
 * toFinite(() => {}))
 * // => 0
 */

import toNumber from "./toNumber"

const INFINITY = 1 / 0
const MAX_INTEGER = Number.MAX_VALUE || 1.7976931348623157e308

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0
  }
  value = toNumber(value)
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1
    return sign * MAX_INTEGER
  }
  return value === value ? value : 0 //NaN 不等于 NaN
}

//es6
// const toFinite = value => {
//   if (!value) {
//     return value === 0 ? value : 0
//   }
//   value = toNumber(value)
//   if (value === INFINITY || value === -INFINITY) {
//     var sign = Math.sign(value)
//     return sign * MAX_INTEGER
//   }
//   return value === value ? value : 0 //NaN 不等于 NaN
// }

export default toFinite
