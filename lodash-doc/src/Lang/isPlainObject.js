/**
 * 检查value是否是普通对象，也就是说该对象由Object构造函数创建，或者[[Prototype]]为null
 * Checks if `value` is a plain object, that is, an object created by the `Object` constructor
 * or one with a `[[Prototype]]` of `null`
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`
 * @example
 *
 * function Foo() {
 *  this.a = 1
 * }
 *
 * isPlainObject(new Foo)
 * // => false
 *
 * isPlainObject([1, 2])
 * // => false
 *
 * isPlainObject({x: 1})
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 */

import isObjectLike from "./isObjectLike"
import { objectTag } from "../variables/Object#toString"
function isPlainObject(value) {
  if (
    !isObjectLike(value) ||
    Object.prototype.toString.call(value) !== objectTag
  ) {
    return false
  }
  const proto = Object.getPrototypeOf(value)
  if (proto === null) {
    return true
  }
  const Ctor =
    Object.prototype.hasOwnProperty.call(proto, "constructor") &&
    proto.constructor
  return (
    typeof Ctor === "function" &&
    Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) ===
      Function.prototype.toString.call(Object)
  )
}

export default isPlainObject
