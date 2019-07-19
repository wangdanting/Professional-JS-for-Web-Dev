/**
 * 转换value为安全整数，安全整数可以用于比较准确的表示
 * Converts `value` to a safe integer. A safe integer can be compared and represented correctly
 *
 * @param {*} value The value to convert
 * @returns {number} Returns the converted integer
 * @example
 * toSafeInteger(3.2)
 * // => 3
 * toSafeInteger(Number.MIN_VALUE);
 * // => 0
 * toSafeInteger(Infinity)
 * // => 9007199254740991
 * toSafeInteger('3.2')
 * // => 3
 */
import toInteger from "./toInteger"
import baseClamp from "../utils/baseClamp"
function toSafeInteger(value) {
  return value
    ? baseClamp(
        toInteger(value),
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
      )
    : 0
}

export default toSafeInteger
