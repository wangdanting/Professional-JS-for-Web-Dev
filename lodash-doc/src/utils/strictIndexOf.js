/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of value, i.e. `===`
 *
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
    length = array.length

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf
