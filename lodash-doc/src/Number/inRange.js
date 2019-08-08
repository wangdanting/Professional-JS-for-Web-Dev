/**
 * 检查n是否在start与end之间，但不包括end。如果end没有指定，那么start设置为0，
 * 如果start大于end,那么参数会交换以便支持负范围。
 * Checks if `n` is between `start` and up to, but not including, `end`.
 * If `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support negative ranges
 * @param {number} number The number to check
 * @param {number} [start=0] The start of the range
 * @param {number} end The end of the range
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @example
 * inRange(3, 2, 4)
 * // => true
 * inRange(4, 8)
 * // => true
 * inRange(4, 2)
 * // => false
 * inRange(2, 2)
 * // => false
 * inRange(1.2, 2)
 * // => true
 * inRange(5.2, 4)
 * // => false
 * inRange(-3, -2, -6)
 * // => true
 */

import toFinite from "../Lang/toFinite"
import toNumber from "../Lang/toNumber"

function inRange(number, start, end) {
  start = toFinite(start)
  if (end === undefined) {
    end = start
    start = 0
  } else {
    end = toFinite(end)
  }
  number = toNumber(number)
  return number > Math.min(start, end) && number < Math.max(start, end)
}

export default inRange
