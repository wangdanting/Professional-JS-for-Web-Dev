/**
 * 转换字符串以空格分开单词，并转为小写
 * Converts `string`, as space separated words, to lower case
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the lower cased string
 * @example
 * lowerCase('--Foo-Bar--')
 * // => 'foo bar'
 * lowerCase('fooBar')
 * // => 'foo bar'
 * lowerCase('__FOO_BAR__')
 * // => 'foo bar'
 */

import createCompounder from "../utils/createCompounder"

var lowerCase = createCompounder(function(result, word, index) {
  return result + (index ? " " : "") + word.toLowerCase()
})

export default lowerCase
