/**
 * The base implementation of `setToString` without support for hot loop shorting
 * @param {Function} func The function to modify
 * @param {Function} string The `toString` result
 * @returns {Function} Returns `func`
 * @example
 * var fun = () => {}
 * baseSetToString(fun, 'abc')
 * console.log(fun.toString())
 * // => 'abc'
 */

import defineProperty from "./defineProperty"
import identity from "../Util/identity"
import constant from "../Util/constant"

var baseSetToString = !defineProperty
  ? identity
  : function(func, string) {
      return defineProperty(func, "toString", {
        configurable: true,
        enumerable: false,
        value: constant(string),
        writable: true
      })
    }

export default baseSetToString
