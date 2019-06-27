/**
 * 检查`value`是否是`null`或者`undefined`
 * Checks if `value` is `null` or `undefined`
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`
 * @example
 *
 * isNil(null)
 * // => true
 *
 * isNil(undefined)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */

function isNil(value) {
  return value == null
}

export default isNil
