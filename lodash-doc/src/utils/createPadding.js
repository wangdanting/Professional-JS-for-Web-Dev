/**
 * Creates the padding for `string` based on `length`.The `chars` string
 * is truncated if the number of characters exceeds `length`
 * @param {number} length The padding length
 * @param {string} [chars=' '] The string used as padding
 * @returns {string} Returns the padding for `string`
 */

import baseToString from "./baseToString"
import baseRepeat from "./baseRepeat"
import stringSize from "./stringSize"

function createPadding(length, chars) {
  chars = chars === undefined ? " " : baseToString(chars)

  var charsLength = chars.length
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars
  }
  var result = baseRepeat(chars, Math.ceil(length / stringSize(chars)))
  return result.slice(0, length)
}

export default createPadding
