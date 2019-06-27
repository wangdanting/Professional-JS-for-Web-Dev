/**
 * 判断`value`是否为`null`
 * Checks if `value` is `null`
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(undefined)
 * // => false
 *
 * isNull(void 0)
 * // => false
 */

function isNull(value) {
  return value === null
}

export default isNull
