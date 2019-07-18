/**
 * 检查value是否为一个Map对象
 * Checks if `value` is classified as a `Map` object
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a map, else `false`
 * @example
 *
 * isMap(new Map)
 * // => true
 * isMap(new WeakMap)
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { mapTag } from "../variables/Object#toString"

function isMap(value) {
  return isObjectLike(value) && Object.prototype.toString.call(value) === mapTag
}

export default isMap
