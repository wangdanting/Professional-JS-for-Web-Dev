/**
 * 替换string字符串中匹配的pattern为给定的replacement
 * Replaces matches for `pattern` in `string` with `replacement`
 * @param {string} [string=''] The string to modify
 * @param {RegExp|string} pattern The pattern to replace
 * @param {Function|string} replacement The match replacement
 * @returns {string} Returns the modified string
 * @example
 * replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 * replace('Hi Fred', 'Fred')
 * // => 'Hi Fred'
 */

import toString from "../Lang/toString"

function replace() {
  var args = arguments,
    string = toString(args[0])

  return args.length < 3 ? string : string.replace(args[1], args[2])
}

export default replace
