/**
 * clamp的基本实现,参数已没有限制，所以如果要使用该函数，确保传入的参数正确
 * The base implementation of 'clamp' which doesn't coerce arguments
 *
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */

function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number < upper ? number : upper
    }
    if (lower !== undefined) {
      number = number > lower ? number : lower
    }
  }
  return number
}

export default baseClamp
