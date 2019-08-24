/**
 * A specialized version of `baseRest` which transforms the rest array.
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start = func.length - 1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = Math.max(start === undefined ? func.length - 1 : start, 0)
  return function() {
    var args = arguments,
      index = -1,
      length = Math.max(args.length - start, 0),
      array = Array(length)

    while (++index < length) {
      array[index] = args[start + index]
    }
    index = -1
    var otherArgs = Array(start + 1)
    while (++index < start) {
      otherArgs[index] = args[index]
    }
    otherArgs[start] = transform(array)
    return func.apply(this, otherArgs)
  }
}

export default overRest
