/**
 * The base implementation of `indexOf` without `fromIndex` bounds checks
 *
 * @param {Array} array The array to inspect
 * @param {*} value The value to search for
 * @param {number} fromIndex The index to search from
 * @returns {number} Returns the index of the matched value, else `-1`
 */
import trictIndexOf from "./strictIndexOf"
import baseFindIndex from "./baseFindIndex"
import baseIsNaN from "./baseIsNaN"

function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? trictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
