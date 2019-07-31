/**
 * The base implementation of `uniqBy` without support for iteratee shorthands
 * @param {Array} array The array to inspect
 * @param {Function} [iteratee] The iteratee invoked per element
 * @returns {Array} Returns the new duplicate free array
 */

import arrayIncludes from "./arrayIncludes"

function baseUniq(array, iteratee) {
  var index = -1,
    length = array.length,
    result = [],
    seen = [] // includes invoked iteratee element

  outer: while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value

    //处理可能为NaN的情况
    if (computed === computed) {
      var seenIndex = seen.length
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer
        }
      }
      seen.push(computed)
      result.push(value)
    } else if (!arrayIncludes(seen, computed)) {
      seen.push(computed)
      result.push(value)
    }
  }

  return result
}

export default baseUniq
