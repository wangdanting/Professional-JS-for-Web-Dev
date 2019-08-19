/**
 * 产生一个包括lower与upper之间的数，如果只提供一个参数返回一个0到提供数之间的数，
 * 如果floating设为true,或者lower或upper是浮点数，结果返回浮点数
 * @param {number} [lower=0] The lower bound
 * @param {number} [upper=1] The upper bound
 * @param {boolean} [floating] Specify returning a floating-point number
 * @returns {number} Returns the random number
 * @example
 * random(0, 5)
 * // => 4
 * random(5)
 * // => 4
 * random(5, true)
 * // => 0.8052893417552531
 * random(1.2, 5.2)
 * // => 3.6806335209871657
 */

import toFinite from "../Lang/toFinite"

function baseRandom(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}

function random(lower, upper, floating) {
  if (floating === undefined) {
    if (typeof upper === "boolean") {
      floating = upper
      upper = undefined
    } else if (typeof lower === "boolean") {
      floating = lower
      lower = undefined
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0
    upper = 1
  } else {
    lower = toFinite(lower)
    if (upper === undefined) {
      upper = lower
      lower = 0
    } else {
      upper = toFinite(upper)
    }
  }
  if (lower > upper) {
    var temp = lower
    lower = upper
    upper = temp
  }
  if (floating || lower % 1 || upper % 1) {
    return Math.min(
      lower +
        Math.random() *
          (upper -
            lower +
            Number.parseFloat("1e-" + ((Math.random() + "").length - 1))),
      upper
    )
  }
  return baseRandom(lower, upper)
}

export default random
