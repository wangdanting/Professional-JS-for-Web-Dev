/**
 * 检查`value`是否为`NaN`
 * Checks if `value` is `NaN`
 * **Note:** diffrence
 * gloabl [isNaN] returns `true` for `undefined` and other non-number values
 * Number.isNaN returns `false` for new Number(NaN)
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`
 * @example
 *
 * isNaN(NaN)
 * // => true
 *
 * isNaN(new Number(NaN))
 * // => true
 *
 * isNaN(undefined)
 * // => false
 */

import isNumber from "./isNumber"

function isNaN(value) {
  return isNumber(value) && value != +value
}

export default isNaN
