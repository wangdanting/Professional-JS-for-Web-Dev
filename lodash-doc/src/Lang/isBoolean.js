/**
 * 判断值是否是布尔原型或者是布尔对象
 * Checks if `value` is classified as a boolean primitive or object
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(1)
 * // => false
 *
 * isBoolean(null)
 * // => false
 */

import isObjectLike from "./isObjectLike"
import baseGetTag from "../utils/baseGetTag"
import { boolTag } from "../variables/Object#toString"

function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && baseGetTag(value) === boolTag)
  )
}

export default isBoolean
