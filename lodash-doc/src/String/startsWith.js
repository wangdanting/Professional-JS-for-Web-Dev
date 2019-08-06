/**
 * 检查字符串string是否以 target 开头。
 * Checks if `string` starts with the given target string
 * @param {string} [string=''] The string to inspect
 * @param {string} [target] The string to search for
 * @param {number} [position=0] The position to search from
 * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`
 * @example
 * startsWith('abc', 'a')
 * // => true
 * startsWith('abc', 'b')
 * // => false
 * startsWith('abc', 'b', 1)
 * // => true
 */
import toString from "../Lang/toString"
import baseToString from "../utils/baseToString"
import baseClamp from "../utils/baseClamp"
import toInteger from "../Lang/toInteger"

function startsWith(string, target, position) {
  string = toString(string) //如果string为null或undefined则会返回空字符串
  target = baseToString(target) //如果string为null或undefined则原样返回

  var length = string.length
  position =
    position == undefined ? 0 : baseClamp(toInteger(position), 0, length)

  return string.slice(position, position + target.length) == target
}

export default startsWith
