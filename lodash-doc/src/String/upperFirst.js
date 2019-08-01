/**
 * 转换字符串string的首字母为大写
 * Converts the first character of `string` to upper case
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the converted string
 * @example
 * upperFirst('fred')
 * // => 'Fred'
 * upperFirst('FRED')
 * // => 'FRED'
 */

import createCaseFirst from "../utils/createCaseFirst"

var upperFirst = createCaseFirst("toUpperCase")

export default upperFirst
