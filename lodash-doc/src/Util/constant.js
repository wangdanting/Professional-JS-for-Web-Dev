/**
 * 创建一个返回value的函数
 * Creates a function that returns `value`
 * @param {*} value The value to return from the new function
 * @returns {Function} Returns the new constant function
 * @example
 * constant(3)()
 * // => 3
 */

function constant(value) {
  return function() {
    return value
  }
}

export default constant
