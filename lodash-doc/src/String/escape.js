/**
 * 转义字符串中的'&', '<', '>', '"', "'", "`" 字符为HTML实体字符
 * **注意：** 不会转义其他字符
 * Converts the characters '&', '<', '>', '"', "'", "`" in `string` to their corresponding HTML entities.
 * **Note:** No other characters are escaped.
 * @param {string} [string=''] The string to escape
 * @returns {string} Returns the escaped string
 * @example
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 */

import toString from "../Lang/toString"

// Used to match HTML characters
var reUnescapedHtml = /[&<>"']/g
var reHasUnescapedHtml = new RegExp(reUnescapedHtml.source)

// Used to map characters to HTML entities.
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}

function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key]
  }
}

var escapeHtmlChar = basePropertyOf(htmlEscapes)

function escape(string) {
  string = toString(string)
  return string && reHasUnescapedHtml.test(string)
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string
}

export default escape
