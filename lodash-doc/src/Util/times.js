/**
 * 调用iteratee `n`次，每次调用返回的结果存入到数组中，iteratee调入一个参数:index
 * Invokes the iteratee `n` times, returning an array of the results of each invocation.
 * The iteratee is invoked with one arguments (index)
 *
 * @param {number} n The number of times to invoke `iteratee`
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results
 * @example
 *
 * times(3, String);
 * // ['0', '1', '2']
 *
 * times(7, value => value * 2)
 * // => 0,2,4,6,8,10,12
 */

import toInteger from "../Lang/toInteger"
import baseTimes from "../utils/baseTimes"
const MAX_ARRAY_LENGTH = 4294967295 //Used as references for the maximum length and index of an array

function times(n, iteratee) {
  n = toInteger(n)
  if (n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return []
  }
  const length = Math.min(n, MAX_ARRAY_LENGTH)
  return baseTimes(length, iteratee)
}

export default times
