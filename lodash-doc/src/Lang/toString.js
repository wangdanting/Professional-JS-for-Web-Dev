/**
 * Converts `value` to a string. An empty string is returned for `null` and `undefined` values.
 * The sign of `-0` is preserved.
 * @param {*} value The value to convert
 * @retuens {string} Returns the converted string
 * @example
 * toString(null)
 * // => ''
 * toString(-0)
 * // => '-0'
 * toString([1, 2, 3])
 * // => '1, 2, 3'
 */

import baseToString from "../utils/baseToString"

function toString(value) {
  return value == null ? "" : baseToString(value)
}

export default toString
