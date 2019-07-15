/**
 * 检查`value`是否是`arguments`对象
 * Checks if `value` is likely an `arguments` object
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `else`
 * @example
 * isArguments(function(){return arguments;}());
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */

import isObjectLike from "./isObjectLike"
import baseGetTag from "../utils/baseGetTag"
import { argsTag } from "../variables/Object#toString"

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) === argsTag
}

const isArguments = baseIsArguments(
  (function() {
    return arguments
  })()
)
  ? baseIsArguments
  : function(value) {
      return (
        isObjectLike(value) &&
        Object.prototype.hasOwnProperty.call(value, "callee") &&
        !Object.prototype.propertyIsEnumerable.call(value, "callee")
      )
    }

export default isArguments
