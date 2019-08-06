/**
 * 转换字符串为下滑线连接格式
 * Converts `string` to snake case
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the snake cased string
 * @example
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 * snakeCase('fooBar')
 * // => 'foo_bar'
 * snakeCase('--FOO-BAR--')
 * // => 'foo_bar'
 */

import createCompounder from "../utils/createCompounder"

var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? "_" : "") + word.toLowerCase()
})

export default snakeCase
