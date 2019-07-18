/**
 * 检查`value`是否是`Error`,`EvalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`, `URIError`对象
 * Checks if `value` is an `Error`,`EvalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`, `URIError`object
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`
 * @example
 * isError(new Error)
 * // => true
 * isError(Error)
 * // => false
 */
import isObjectLike from "./isObjectLike"
import { errorTag, domExcTag } from "../variables/Object#toString"
import isPlainObject from "./isPlainObject"

function isError(value) {
  if (!isObjectLike(value)) {
    return false
  }
  const tag = Object.prototype.toString.call(value)
  return (
    tag === errorTag ||
    tag === domExcTag ||
    (typeof value.message === "string" &&
      typeof value.message === "string" &&
      !isPlainObject(value))
  )
}

export default isError
