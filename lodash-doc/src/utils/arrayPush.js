/**
 * Appends the elements of `value` to `array`
 *
 * @param {Array} array The array to modify
 * @param {Array} values The values to append
 * @returns {Array} Returns `array`
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length

  while (++index < length) {
    array[offset + index] = values[index]
  }
  return array
}

export default arrayPush
