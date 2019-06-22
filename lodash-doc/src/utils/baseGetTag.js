/**
 * 得到`类型标签`。
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`
 */

import { undefinedTag, nullTag } from "../variables/Object#toString"
import getRawTag from "./getRawTag"
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag
  }

  //许多内置的 JavaScript 对象类型即便没有 toStringTag 属性，也能被 toString() 方法识别并返回特定的类型标签，
  //(e.g. Object.prototype.toString.call('foo');     // "[object String]")

  //另外一些对象类型则不然，toString() 方法能识别它们是因为引擎为它们设置好了 toStringTag 标签：
  //(e.g. Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]")

  const symToStringTag = Symbol ? Symbol.toStringTag : undefined
  // 区分对象类型是否有 toStringTag 属性
  const result =
    symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : Object.prototype.toString.call(value)
  return result
}

export default baseGetTag
