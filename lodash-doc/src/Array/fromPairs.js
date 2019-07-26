/**
 * 与toPairs正好相反，这个方法返回一个由键值对pairs构成的对象
 * The inverse of `_.toPairs`; this method returns an object composed from key-value `pairs`.
 * @param {Array} pairs The key-value pairs
 * @returns {Object} Returns the new object
 * @example
 * fromPairs([['a', 1], ['b', 2]])
 * // => {'a': 1, 'b': 2}
 * fromPairs([['a'], ['b']])
 * // => {'a': undefined, 'b': undefined}
 */

function fromPairs(pairs) {
  var index = -1,
    length = pairs == null ? 0 : pairs.length,
    result = {}

  while (++index < length) {
    var pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}

export default fromPairs
