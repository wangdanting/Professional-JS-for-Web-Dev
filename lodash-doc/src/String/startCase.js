/**
 * 转换 string 字符串为 start case
 * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the start cased string
 * @example
 * startCase('--foo-bar--')
 * // => 'Foo Bar'
 * startCase('fooBar')
 * // => 'Foo Bar'
 * startCase('__FOO_BAR__')
 * // => 'FOO BAR'
 */

import createCompounder from "../utils/createCompounder"
import upperFirst from "./upperFirst"

var startCase = createCompounder(function(result, word, index) {
  return result + (index ? " " : "") + upperFirst(word)
})

export default startCase
