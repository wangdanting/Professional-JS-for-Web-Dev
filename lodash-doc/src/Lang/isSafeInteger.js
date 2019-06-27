/**
 * 检查`value`是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。
 * Checks if `value` is a safe integer.An integer is safe if it`s an IEEE-754
 * double precision number which isn't the result of a rounded unsafe integer.
 *
 * **Note:** This method is based on Number.isSafeInteger
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`
 * @example
 */

import isInteger from "./isInteger"

function isSafeInteger(value) {
  return (
    isInteger(value) &&
    value >= Number.MIN_SAFE_INTEGER &&
    value <= Number.MAX_SAFE_INTEGER
  )
}

export default isSafeInteger
