/**
 * The base implementation of `isNative` without bad shim checks
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`
 */

import isObject from "../Lang/isObject"
import isFunction from "../Lang/isFunction"
import toSource from "../utils/toSource"

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

/** Used to detect if a method is native. */
var reIsNative = new RegExp(
  "^" +
    Function.prototype.toString
      .call(Object.prototype.hasOwnProperty)
      .replace(reRegExpChar, "\\$&")
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?"
      ) +
    "$"
)

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/

function baseIsNative(value) {
  if (!isObject(value)) {
    return false
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor
  return pattern.test(toSource(value))
}

export default baseIsNative
