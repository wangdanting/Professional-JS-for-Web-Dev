/**
 * 检查`value`是否是`WeakSet`对象
 * Checks if `value`is classified as a `WeakSet` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`
 * @example
 *
 * isWeakSet(new WeakSet())
 * // => true
 *
 * isWeakSet(new Set())
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { weakSetTag } from "../variables/Object#toString"

function isWeakSet(value) {
  return (
    isObjectLike(value) && Object.prototype.toString.call(value) === weakSetTag
  )
}

export default isWeakSet
