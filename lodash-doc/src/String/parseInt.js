/**
 * 转换string字符串为指定基数的整数，如果基数是undefined或者0,则radix基数默认是10，如果string字符串是16进制，
 * 则radix基数为16
 * Converts `string` to an integer of the specified radix. If `radix` is `undefined` or `0`, a `radix`
 * of `10` is used unless `value` is a hexadecimal, in which case a `radix` of `16` is used.
 * @param {string} string The string to convert
 * @param {number} [radix=10] The radix to interpert `value` by
 * @returns {number} Returns the converted integer
 * @example
 * parseInt('08')
 * // => 8
 * parseInt('18', 16)
 * // => 24
 */

import toString from "../Lang/toString"

function parseInt(string, radix) {
  if (radix == null) {
    radix = 0
  } else if (radix) {
    radix = +radix
  }
  return Number.parseInt(toString(string).trim(), radix || 0)
}

export default parseInt
