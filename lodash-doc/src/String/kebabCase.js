/**
 * 转换字符串为中滑线连接格式
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the kebab cased string
 * @example
 * kebabCase('Foo Bar')
 * // => foo-bar
 * kebabCase('fooBar')
 * // => foo-bar
 * kebabCase('__FOO_BAR__')
 * // => foo-bar
 */

import createCompounder from "../utils/createCompounder"

var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? "-" : "") + word.toLowerCase()
})

export default kebabCase
