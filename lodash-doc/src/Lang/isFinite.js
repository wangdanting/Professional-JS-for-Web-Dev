/**
 * 检查`value`是否是有限数值
 * Checks if `value` is a finite primitive number
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`
 * @example
 * isFinite(3)
 * // => true
 * isFinite(Number.MIN_VALUE)
 * // => true
 * isFinite(Infinity)
 * // => false
 * isFinite('3')
 * // => false
 */

const isFinite = value => Number.isFinite(value)

export default isFinite
