/**
 * 创建一个调用函数，通过this绑定和创建函数的参数调用func，当他被调用n或更多次之后将马上触发func
 * This method creates a function that invokes `func` once it's called `n` or more times
 *
 * @param {number} n The number of calls before `func` is invoked
 * @param {Function} func The function to restrict
 * @returns {Function} Returns the new restricted function
 * @example
 */

import toInteger from "../Lang/toInteger"

const FUNC_ERROR_TEXT = "Expected a function"

function after(n, func) {
  if (typeof func !== "function") {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  n = toInteger(n)
  return function() {
    if (--n < 1) {
      return func.apply(this, arguments)
    }
  }
}

export default after
