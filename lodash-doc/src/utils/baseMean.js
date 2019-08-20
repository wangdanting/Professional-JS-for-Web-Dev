/**
 * The base implementation of `mean` without support for iteratee shorthands
 * @param {Array} array The array to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {number} Returns the mean
 */

import baseSum from "./baseSum"

const NAN = 0 / 0

function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length
  return length ? baseSum(array, iteratee) / length : NAN
}

export default baseMean
