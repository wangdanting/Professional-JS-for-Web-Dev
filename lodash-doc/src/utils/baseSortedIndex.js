/**
 * The base implementation of `sortedIndex` and `sortedLastIndex` which performs
 * a binaray search of `array` to determine the index at which `value` should be inserted
 * into `array` in order to maintain its sort order
 * @param {Array} array The sorted array to inspect
 * @param {*} value The value to evaluate
 * @param {boolean} [retHighest] Specify returning the highest qualified index
 * @returns {number} Returns the index at which `value` should be inserted into `array`
 */

import baseSortedIndexBy from "./baseSortedIndexBy"
import identity from "../Util/identity"
const MAX_ARRAY_LENGTH = 4294967295 //Used as references for the maximum length and index of an array
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1 //一半

function baseSortedIndex(array, value, retHighest) {
  var low = 0,
    high = array == null ? low : array.length

  if (
    typeof value === "number" &&
    value === value &&
    high <= HALF_MAX_ARRAY_LENGTH
  ) {
    while (low < high) {
      var mid = (low + high) >>> 1,
        computed = array[mid]

      if (
        computed !== null &&
        (retHighest ? computed <= value : computed < value)
      ) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return high
  }
  return baseSortedIndexBy(array, value, identity, retHighest)
}

export default baseSortedIndex
