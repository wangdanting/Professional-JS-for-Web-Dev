/**
 * 检查值是否是`Function`对象
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 * isFunction(() => {})
 * // => true
 *
 * isFunction(function* gen(){})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(new Proxy({}, {}))
 * // => false
 *
 * isFunction(new Map())
 * // => false
 */

import isObject from "./isObject"
import baseGetTag from "../utils/baseGetTag"
import { funcTag, genTag, asyncTag } from "../variables/Object#toString"
function isFunction(value) {
  if (!isObject) {
    return false
  }

  //在任何值上调用Object原生的toString()方法，都会返回一个[Object NativeConstructorName] 格式的字符串。
  //每个类在内部都有一个[[Class]]属性，这个属性中就指定了上述字符串中的构造函数名
  var tag = baseGetTag(value)
  return tag === funcTag || tag === genTag || tag === asyncTag
}

export default isFunction
