/**
 * Converts `value` to a string. An empty string is returned for `null` and `undefined` values.
 * The sign of `-0` is preserved.
 * 转换`value`成字符串，`null`和`undefined`返回空字符串，`-0`转成'-0'
 * @param {*} value The value to convert
 * @retuens {string} Returns the converted string
 * @example
 * toString(null)
 * // => ''
 * toString(-0)
 * // => '-0'
 * toString([1, 2, 3])
 * // => '1, 2, 3'
 * toString({a: 1})
 * // => [object Object]
 */

import baseToString from "../utils/baseToString"

function toString(value) {
  return value == null ? "" : baseToString(value)
}

export default toString
