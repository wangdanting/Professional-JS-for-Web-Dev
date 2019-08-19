/**
 * 两数相减
 * Subtract two numbers
 * @param {number} minuend The first number in a subtraction
 * @param {number} subtrahend The second number in a subtraction
 * @returns {number} Returns the difference
 * @example
 * subtract(6, 4)
 * // => 2
 * subtract(6, '4')
 * // => 2
 */

import createMathOperation from "../utils/createMathOperation"

var subtract = createMathOperation(function(minuend, subtrahend) {
  return minuend - subtrahend
}, 0)

export default subtract
