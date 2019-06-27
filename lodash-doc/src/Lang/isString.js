/**
 * 检查`value`是否为字符串
 * Checks if `value` is classified as a `String` primitive or object.
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a string, else `false`
 * @example
 *
 * isString('1')
 * // => true
 *
 * isString(new String('1'))
 * // => true
 *
 * isString(1)
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { stringTag } from "../variables/Object#toString"

function isString(value) {
  return (
    typeof value === "string" ||
    (isObjectLike(value) && Object.prototype.toString.call(value) === stringTag)
  )
}

export default isString
