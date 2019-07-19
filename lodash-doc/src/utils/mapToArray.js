/**
 * Converts `map` to its key-value pairs
 * @param {Map} map The map to convert
 * @returns {Array} Returns the key-value pairs
 */

function mapToArray(map) {
  var index = -1,
    result = Array(map.size)

  map.forEach(function(value, key) {
    result[++index] = [key, value]
  })

  return result
}

export default mapToArray
