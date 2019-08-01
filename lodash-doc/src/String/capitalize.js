/**
 * 转换字符串string首字母为大写，剩下为小写
 * Converts the first character of `string` to upper case and the remaining to lower case
 * @param {string} [string=''] The string to capitalize
 * @returns {string} Returns the capitalized string
 * @example
 * capitalize('FRED')
 * // => 'Fred'
 */

import toString from "../Lang/toString"
import upperFirst from "./upperFirst"

function capitalize(string) {
  return upperFirst(toString(string).toLowerCase())
}

export default capitalize
