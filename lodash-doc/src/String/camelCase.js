/**
 * 转换字符串string为驼峰写法
 * Converts `string` to [camel case]
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the camel cased string
 * @example
 * camelCase('Foo Bar')
 * // => fooBar
 * camelCase('--foo-bar--')
 * // => fooBar
 * camelCase('__FOO_BAR__')
 * // => fooBar
 */

import createCompounder from "../utils/createCompounder"
import capitalize from "./capitalize"

var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase()
  return result + (index ? capitalize(word) : word)
})

export default camelCase
