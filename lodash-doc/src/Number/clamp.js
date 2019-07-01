/**
 * 返回限制在`lower`和`upper`之间的值
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @param {number} number The number to clamp
 * @param {number} [lower] The lower bound
 * @param {number} upper The upper bound
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 *
 */

import toNumber from "../Lang/toNumber"
import baseClamp from "../utils/baseClamp"
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower
    lower = undefined
  }
  if (upper !== undefined) {
    upper = toNumber(upper)
    upper = upper === upper ? upper : 0
  }
  if (lower !== undefined) {
    lower = toNumber(lower)
    lower = lower === lower ? lower : 0
  }
  return baseClamp(toNumber(number), lower, upper)
}

export default clamp
