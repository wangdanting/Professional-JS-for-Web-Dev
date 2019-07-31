/**
 * The base implementation of `sortedUniq` and `sortedUniqBy` without support
 * for iteratee shorthands
 * @param {Array} array The array to inspect
 * @param {Function} [iteratee] The interatee invoked per element
 * @returns {Array} Returns the new duplicate free array
 */

import eq from "../Lang/eq"
function baseSortedUniq(array, iteratee) {
  var index = -1,
    length = array.length,
    resIndex = 0,
    result = [],
    seen = undefined

  while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value

    if (!index || !eq(computed, seen)) {
      seen = computed
      result[resIndex++] = value
    }
  }

  return result
}

export default baseSortedUniq
