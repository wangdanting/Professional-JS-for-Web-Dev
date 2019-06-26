/**
 * 如果`value`不是数组，则强制转换为数组
 * Casts `value` as an array if it's not one.
 * @param {*} value The value to inspect
 * @returns {Array} Returns the cast array
 * @example
 *
 * castArray(1)
 * // =>[1]
 *
 * castArray({a: 1})
 * // =>[{ a: 1 }]
 *
 * castArray('abc')
 * // =>['abc']
 *
 * castArray(null)
 * // =>[null]
 *
 * castArray(undefined)
 * // =>[undefined]
 *
 * castArray()
 * // =>[]
 *
 * var a = [1, 2]; a === castArray(a)
 * // =>true
 */

function castArray() {
  if (!arguments.length) {
    return []
  }
  var value = arguments[0]
  return Array.isArray(value) ? value : [value]
}

export default castArray
