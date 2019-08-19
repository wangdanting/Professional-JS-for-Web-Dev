/**
 * 根据 precision（精度） 向下舍入 number
 * Computes `number` rounded down to `precision`
 * @param {number} number The number to round down
 * @param {number} [precision=0] The precision to round down to.
 * @returns {number} Returns the rounded down number
 * @example
 * floor(4.006)
 * // => 4
 * floor(0.046, 2)
 * // => 0.04
 */

import createRound from "../utils/createRound"

var floor = createRound("floor")

export default floor
