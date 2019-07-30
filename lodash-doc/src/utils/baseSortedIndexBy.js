/**
 * The base implementation of `sortedIndexBy` and `sortedLastIndexBy` which invokes `iteratee` for
 * `value` and each element of `array` to compute their sort ranking.The iteratee is invoked with one argument
 * @param {Array} array The sorted array to inspect
 * @param {*} value The value to evaluate
 * @param {Function} iteratee The iteratee invoked per element
 * @param {boolean} [retHighest] Specify returning the highest qualified index
 * @returns {number} Returns the index at which `value` should be inserted into `array`
 */

import isSymbol from "../Lang/isSymbol"
const MAX_ARRAY_LENGTH = 4294967295 //Used as references for the maximum length and index of an array
const MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1

function baseSortedIndexBy(array, value, iteratee, retHighest) {
  value = iteratee(value)

  var low = 0,
    high = array == null ? 0 : array.length,
    valIsNaN = value !== value,
    valIsNull = value === null,
    valIsSymbol = isSymbol(value),
    valIsUndefined = value === undefined

  while (low < high) {
    var mid = (low + high) >>> 1,
      computed = iteratee(array[mid]),
      othIsDefined = computed !== undefined,
      othIsNull = computed === null,
      othIsReflexive = computed === computed,
      othIsSymbol = isSymbol(computed)

    if (valIsNaN) {
      var setLow = retHighest || othIsReflexive
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined)
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull)
    } else if (valIsSymbol) {
      setLow =
        othIsReflexive &&
        othIsDefined &&
        !othIsNull &&
        (retHighest || !othIsSymbol)
    } else if (othIsNull || othIsSymbol) {
      setLow = false
    } else {
      setLow = retHighest ? computed <= value : computed < value
    }

    if (setLow) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return Math.min(high, MAX_ARRAY_INDEX)
}

export default baseSortedIndexBy
