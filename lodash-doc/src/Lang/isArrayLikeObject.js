/**
 * 这个方法类似.isArrayLike，除了它还检查value是否是一个对象
 * The method is like isArrayLike except that it also checks if value is an object
 * @param {*} value The value to check
 * @returns {boolean} Returns true if value is an array-like object
 *
 * @example
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(() => {})
 * // => false
 */

import isArrayLike from "./isArrayLike.js"
import isObjectLike from "./isObjectLike.js"

function isArrayLikeObject(value) {
  return isArrayLike(value) && isObjectLike(value)
}

export default isArrayLikeObject
