/**
 * 这个方法返回首个提供的参数。
 * This method returns the first argument it receives
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = {a: 1};
 * identity(object) === object
 * // => true
 */
function identity(value) {
  return value
}

export default identity
