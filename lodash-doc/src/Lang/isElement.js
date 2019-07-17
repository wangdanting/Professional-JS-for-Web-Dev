/**
 * 检查value是否是DOM元素
 * Checks if `value` is likely a DOM element
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`
 * @example
 * isElement(document.body)
 * // => true
 * isElement('<body>')
 * // -> false
 */

import isObjectLike from "./isObjectLike"
import isPlainObject from "./isPlainObject"

function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
}

export default isElement
