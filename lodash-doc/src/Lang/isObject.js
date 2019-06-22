/**
 * Checks if `value` is the `Object`
 * (e.g. arrays, function, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(new RegExp())
 * // => true
 *
 * isObject(()=>{})
 * // => true
 *
 * isObject(new Number(0))
 * // => true
 *
 * isObject(null)
 * // => false
 *
 * isObject(Symbol())
 * // => false
 */

function isObject(value) {
  var type = typeof value
  return value != null && (type === "object" || type === "function")
}

export default isObject
