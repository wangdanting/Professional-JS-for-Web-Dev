/**
 * 转换整个string字符串的字符为大写
 * Converts `string`, as a whole, to upper case just like [String#toUpperCase](https://mdn.io/toUpperCase).
 * @param {string} [string=''] The string to convert
 * @returns {string} Returns the upper cased string
 * @example
 * toUpper('--foo-bar--')
 * // => '--FOO-BAR--'
 * toUpper('fooBar')
 * // => 'FOOBAR'
 * toUpper('__foo_bar__')
 * // => '__FOO_BAR__'
 */

import toString from "../Lang/toString"

function toLower(value) {
  return toString(value).toUpperCase()
}

export default toLower
