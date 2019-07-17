/**
 * 检查value是否为一个空对象，集合，map或者set。判断依据是没有可枚举属性的对象，length等于0的arguments object, array
 * string
 *
 * Checks if `value` is an empty object, collection, map or set
 *
 * Objects are considered empty if they have no own enumerable string keyed properties
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings collections are considered
 * empty if they have a `length` of `0`.Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty({'a': 1})
 * // => false
 */
import isArrayLike from "./isArrayLike"
import isArray from "./isArray"
import isArguments from "./isArguments"
import { mapTag, setTag } from "../variables/Object#toString"
import isPrototype from "../utils/isPrototype"
import baseKeys from "../utils/baseKeys"

function isEmpty(value) {
  if (value == null) {
    return true
  }
  if (
    isArrayLike(value) &&
    (isArray(value) ||
      typeof value === "string" ||
      typeof value.splice === "function" ||
      isArguments(value))
  ) {
    return !value.length
  }
  const tag = Object.prototype.toString.call(value)
  if (tag === mapTag || tag === setTag) {
    return !value.size
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length
  }
  for (let key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}

export default isEmpty
