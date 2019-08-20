/**
 * The base implementation of methods like `max` and `min` which accepts a `comparator`
 * to determine the extremum value
 * @param {Array} array The array to iterate over
 * @param {Function} iteratee The iteratee invoked per iteration
 * @param {Function} comparator The comparator used to compare values
 * @returns {*} Returns the extremum value
 */

import isSymbol from "../Lang/isSymbol"

function baseExtremum(array, iteratee, comparator) {
  var index = -1,
    length = array.length,
    result = undefined,
    computed = undefined

  while (++index < length) {
    var value = array[index],
      current = iteratee(value)

    if (
      current != null &&
      (computed === undefined
        ? current === current && !isSymbol(current)
        : comparator(current, computed))
    ) {
      computed = current
      result = value
    }
  }

  return result
}

export default baseExtremum
