/**
 * The base implementation of `nth` which doesn't coerce arguments
 * @param {Array} array The array to query
 * @param {number} n The index of the element to return
 * @returns {*} Returns the nth element of `array`
 */

import isIndex from "../utils/isIndex"
function baseNth(array, n) {
  var length = array.length
  if (!length) {
    return
  }
  n += n < 0 ? length : 0
  return isIndex(n, length) ? array[n] : undefined
}

export default baseNth
