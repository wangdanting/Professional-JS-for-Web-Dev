/**
 * 检查`value`是否是`WeakMap`对象
 * Checks if `value` is classified as a `WeakMap` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`
 * @example
 *
 * isWeakMap(new WeakMap())
 * // => true
 *
 * isWeakMap(new Map())
 * // => false
 */

import isObjectLike from "./isObjectLike"
import { weakMapTag } from "../variables/Object#toString"

function isWeakMap(value) {
  return (
    isObjectLike(value) && Object.prototype.toString.call(value) === weakMapTag
  )
}

export default isWeakMap
