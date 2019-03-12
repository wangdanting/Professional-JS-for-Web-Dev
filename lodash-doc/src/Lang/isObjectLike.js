/**
 * 检查valve是否是类对象，如果一个值是类对象，那么它不应该是null，而且typeof后的结果是object
 * Checks if value is object-like, a value is object-like if it's not null and has a typeof result of 'object'
 * @param {*} value The value to check
 * @returns {boolean} Returns true if value is object-like else false
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */

function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

export default isObjectLike;
