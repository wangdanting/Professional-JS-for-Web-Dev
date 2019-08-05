/**
 * 重复N次给定字符串
 * Repeats the given string `n` times
 * @param {string} [string=''] The string to repeat
 * @param {number} [n=1] The number of times to repeat the string
 * @returns {string} Returns the repeated string
 * @example
 * repeat('*', 3)
 * // => '***'
 * repeat('abc', 2)
 * // => 'abcabc'
 * repeat('abc', 0)
 * // => ''
 */

import toInteger from "../Lang/toInteger"
import toString from "../Lang/toString"
import baseRepeat from "../utils/baseRepeat"

function repeat(string, n, guard) {
  if (n === undefined) {
    n = 1
  } else {
    n = toInteger(n)
  }
  return baseRepeat(toString(string), n)
}

export default repeat
