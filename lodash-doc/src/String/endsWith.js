/**
 * 检查字符串string是否以给定的target字符串结尾
 * Checks if `string` ends with the given target string
 * @param {string} [string=''] The string to inspect
 * @param {string} [target] The string to search for
 * @param {number} [position=string.length] The position to search up to
 * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`
 * @example
 * endsWith('abc', 'c')
 * // => true
 * endsWith('abc', 'b')
 * // => false
 * endsWith('abc', 'b', 2)
 * // => true
 */

import toString from "../Lang/toString"
import baseToString from "../utils/baseToString"
import baseClamp from "../utils/baseClamp"
import toInteger from "../Lang/toInteger"

function endsWith(string, target, position) {
  string = toString(string) //如果string为null或undefined则会返回空字符串
  target = baseToString(target) //如果string为null或undefined则原样返回

  var length = string.length
  position =
    position === undefined ? length : baseClamp(toInteger(position), 0, length)

  var end = position
  position = position - target.length

  return position >= 0 && string.slice(position, end) == target
}

export default endsWith
