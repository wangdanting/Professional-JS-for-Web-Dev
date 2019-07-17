/**
 * 创建一个object的自身可枚举属性名为数组
 * Creates an array of the own enumerable property names of `object`
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names
 * @example
 *
 * function Foo() {
 *  this.a = 1;
 *  this.b = 2;
 * }
 * Foo.prototype.c = 3;
 *
 * keys(new Foo);
 * // => ['a', 'b']
 *
 * keys('hi')
 * // => ['0', '1']
 */

import isArrayLike from "../Lang/isArrayLike"
import arrayLikeKeys from "../utils/arrayLikeKeys"
import baseKeys from "../utils/baseKeys"

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
}

// es6
// function keys(object) {
//   return Object.keys(object)
// }

export default keys
