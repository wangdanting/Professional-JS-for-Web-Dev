/**
 * 判断`value`是否是数字
 * Checks if `value` is classified as a `Number` primitive or object
 * **Note:** To exclude `Infinity`, `-Infinity`,and `NaN`
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a number, else `false`
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(new Number(3))
 * // => true
 *
 * isNumber(NaN)
 * // => true
 *
 * isNumber(undefined)
 * // => false
 *
 * isNumber('3')
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { numberTag } from "../variables/Object#toString"
function isNumber(value) {
  return (
    typeof value === "number" ||
    (isObjectLike(value) && Object.prototype.toString.call(value) === numberTag)
  )
}

export default isNumber
