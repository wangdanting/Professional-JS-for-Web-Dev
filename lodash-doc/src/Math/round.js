/**
 * 根据precision（精度）四舍五入 number
 * Computes `number` rounded to `precision`
 * @param {number} number The number to round
 * @param {number} [precision=0] The precision to round to
 * @returns {number} Returns the rounded number
 * @example
 * round(4.006)
 * // => 4
 * round(4.006, 2)
 * // => 4.01
 */

import createRound from "../utils/createRound"

var round = createRound("round")

export default round
