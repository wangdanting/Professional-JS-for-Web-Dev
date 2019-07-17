/**
 * 检查value是否是Date对象
 * Checks if `value` is classified as a `Date` object.
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`
 * @example
 * isDate(new Date);
 * // => true
 * isDate('Mon April 23 2012')
 * // => false
 */

import isObjectLike from "../Lang/isObjectLike"
import baseGetTag from "../utils/baseGetTag"
import { dateTag } from "../variables/Object#toString"

function isDate(value) {
  return isObjectLike(value) && baseGetTag(value) === dateTag
}

export default isDate
