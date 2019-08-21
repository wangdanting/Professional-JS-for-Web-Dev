/**
 * 创建一个调用函数，通过this绑定和创建函数的参数调用func，调用次数不操过n次，之后再调用这个函数，
 * 将返回一次最后调用func的结果
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent calls
 * to the created function return the result of the last `func` invocation
 *
 * @param {number} n The number of calls at which `func` is no longer invoked
 * @param {Function} func The function to restrict
 * @returns {Function} Returns the new restricted function
 * @example
 * document.getElementById("btn").addEventListener("click", before(5, this.add))
 * // this.add函数最多执行4次
 */

import toInteger from "../Lang/toInteger"
const FUNC_ERROR_TEXT = "Expected a function"

function before(n, func) {
  var result
  if (typeof func !== "function") {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  n = toInteger(n)
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments)
    }
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}

export default before
