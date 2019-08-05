/**
 * 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */

import toString from "../Lang/toString"
import toInteger from "../Lang/toInteger"
import stringSize from "../utils/stringSize"
import createPadding from "../utils/createPadding"

function padStart(string, length, chars) {
  string = toString(string)
  length = toInteger(length)

  var strLength = length ? stringSize(string) : 0
  return length && strLength < length
    ? createPadding(length - strLength, chars) + string
    : string
}

export default padStart
