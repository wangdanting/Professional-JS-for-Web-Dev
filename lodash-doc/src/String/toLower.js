/**
 * 转换整个string字符串的字符为小写
 * Converts `string`, as a whole, to lower case just like [String#toLowerCase](https://mdn.io/toLowerCase).
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the lower cased string
 * @example
 * toLower('--Foo-Bar--')
 * // => '--foo-bar--'
 * toLower('fooBar')
 * // => 'foobar'
 * toLower('__FOO_BAR__')
 * // => '__foo_bar__'
 */

import toString from "../Lang/toString"

function toLower(value) {
  return toString(value).toLowerCase()
}

export default toLower
