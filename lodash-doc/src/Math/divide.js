/**
 * 两数相除
 * Divide two numbers
 * @param {number} dividend The first number in a division
 * @param {number} divisor The second number in a division
 * @returns {number} Returns the quotient
 * @example
 * divide(6, 4)
 * // => 1.5
 * divide(6, '4')
 * // => 1.5
 */

import createMathOperation from "../utils/createMathOperation"

var divide = createMathOperation(function(dividend, divisor) {
  return dividend / divisor
}, 1)

export default divide
