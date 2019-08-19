/**
 * Adds two numbers
 * @param {number} augend The first number in an addition
 * @param {number} addend The second number in an addition
 * @returns {number} Returns the total
 * @example
 * add(6, 4)
 * // => 10
 * add(6, '4')
 * // => '64'
 */

import createMathOperation from "../utils/createMathOperation"

var add = createMathOperation(function(augend, addend) {
  return augend + addend
}, 0)

export default add
