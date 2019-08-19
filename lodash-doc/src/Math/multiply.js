/**
 * 两个数相乘
 * Multiply two numbers
 * @param {number} multiplier The first number in a multiplication
 * @param {number} multiplicand The second number in a multiplication
 * @returns {number} Returns the product
 * @example
 * multiply(6, 4)
 * // => 24
 * multiply(6, '4')
 * // 24
 */

import createMathOperation from "../utils/createMathOperation"

var multiply = createMathOperation(function(multiplier, multiplicand) {
  return multiplier * multiplicand
}, 1)

export default multiply
