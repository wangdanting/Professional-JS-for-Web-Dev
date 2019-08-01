/**
 * 转换字符串string的首字母为小写
 * Converts the first character of `string` to lower case
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the converted string
 * @example
 * lowerFirst('Fred')
 * // => 'fred'
 * lowerFirst('FRED')
 * // => 'fRED'
 */

import createCaseFirst from "../utils/createCaseFirst"

var lowerFirst = createCaseFirst("toLowerCase")

export default lowerFirst
