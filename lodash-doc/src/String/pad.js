/**
 * 如果string字符串长度小于length则从左侧和右侧填充字符，如果没法平均分配，则截断超出的长度
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`
 * @param {string} [string=''] The string to pad
 * @param {number} [length=0] The padding length
 * @param {string} [chars=' '] The string used as padding
 * @returns {string} Returns the padding string
 * @example
 * pad('abc', 8)
 * // => 'abc'
 * pad('abc', 8, '_-')
 * // => '_-abc_-_'
 * pad('abc', 3)
 * // => 'abc'
 */

import toString from "../Lang/toString"
import toInteger from "../Lang/toInteger"
import stringSize from "../utils/stringSize"
import createPadding from "../utils/createPadding"

function pad(string, length, chars) {
  string = toString(string)
  length = toInteger(length)

  var strLength = length ? stringSize(string) : 0
  if (!length || strLength >= length) {
    return string
  }
  var mid = (length - strLength) / 2
  return (
    createPadding(Math.floor(mid), chars) +
    string +
    createPadding(Math.ceil(mid), chars)
  )
}

export default pad
