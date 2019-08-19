/**
 * 根据precision(精度)向上舍入number。(precision(精度)可以理解为保留几位小数)
 * Computes `number` rounded up to `precision`
 * @param {number} number The number to round up
 * @param {number} [precision=0] The precision to round up to
 * @returns {number} Returns the rounded up number
 * @example
 * ceil(4.006)
 * // =>
 * ceil(6.004, 2)
 * // =>
 */

import createRound from "../utils/createRound"

var ceil = createRound("ceil")

export default ceil
