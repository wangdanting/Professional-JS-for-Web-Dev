/**
 * Checks if `value` is the `Object`
 * (e.g. arrays, function, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 *
 */

function isObject(value) {
  var type = typeof value
  return value != null && (type === "object" || type === "function")
}

// es6版
// const isObject = value => {
//   let type = typeof value;
//   return value != null && (type === "object" || type === "function")
// }

export default isObject
