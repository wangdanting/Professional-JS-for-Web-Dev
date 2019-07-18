/**
 * 检查value是否为RegExp对象
 * Checks if `value` is classified as a `RegExp` object
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`
 * @example
 * isRegExp(/abc/)
 * // => true
 * isRegExp('/abc/')
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { regexpTag } from "../variables/Object#toString"

function isRegExp(value) {
  return (
    isObjectLike(value) && Object.prototype.toString.call(value) === regexpTag
  )
}

export default isRegExp
