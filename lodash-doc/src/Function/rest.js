/**
 * 创建一个函数，调用func时，this绑定到创建的新函数，并且start之后的参数作为数组传入
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array
 * @param {Function} func The funtion to apply a rest parameter to
 * @param {number} [start=func.length-1] The start position of the rest parameter
 * @returns {Function} Returns the new function
 * @example
 * const func = (one, two) => {
 *  console.log(one, "one")
 *  console.log(two, "two")
 * }
 * const say = rest(func)
 * say(1, 2, 3, 4)
 *
 * // => 1 "one"
 * // => [2, 3, 4] "two"
 *
 * const func1 = (one, two, three) => {
 *  console.log(one, "one")
 *  console.log(two, "two")
 *  console.log(three, 'three')
 * }
 * const say1 = rest(func1, 2)
 * say1(1, 2, 3, 4)
 *
 * // => 1 "one"
 * // => 2 "two"
 * // => [3, 4] 'three'
 */

import toInteger from "../Lang/toInteger"
import baseRest from "../utils/baseRest"

const FUNC_ERROR_TEXT = "Expected a function"

function rest(func, start) {
  if (typeof func !== "function") {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  start = start === undefined ? start : toInteger(start)
  return baseRest(func, start)
}

export default rest
