/**
 * 检查value是否是一个Set对象
 * Checks if `value` is classified as a `Set` object
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a set, else `false`
 * @example
 * isSet(new Set)
 * // => true
 * isSet(new WeakSet)
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { setTag } from "../variables/Object#toString"

function isSet(value) {
  return isObjectLike(value) && Object.prototype.toString.call(value) === setTag
}

export default isSet
