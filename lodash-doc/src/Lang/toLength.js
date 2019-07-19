/**
 * 转换value用作类数组对象的长度整数
 * Converts `value` to an integer suitable for use as the length of an array-like object
 * @param {*} value The value to convert
 * @returns {number} Returns the converted integer
 * @example
 *
 * toLength(3.2)
 * // => 3
 *
 * toLength(Number.MIN_VALUE)
 * // => 0
 *
 * toLength(Infinity)
 * // => 4294967295
 *
 * toLength('3.2')
 * // => 3
 */
import toInteger from "./toInteger"
import baseClamp from "../utils/baseClamp"
const MAX_ARRAY_LENGTH = 4294967295 //Used as references for the maximum length and index of an array

function toLength(value) {
  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0
}

export default toLength
