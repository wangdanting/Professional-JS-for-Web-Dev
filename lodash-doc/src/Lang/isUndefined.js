/**
 * 检查`value`是否是undefined
 * Checks if `value` is `undefined`
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`
 * @example
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(0)
 * // => false
 */

function isUndefined(value) {
  return value === undefined
}

export default isUndefined
