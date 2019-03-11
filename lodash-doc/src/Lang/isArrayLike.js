/**
 * 检查value是否是类数组，如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于0，小于或等于 Number.MAX_SAFE_INTEGER
 * Checks if 'value' is array-like. A value is considered array-like if it's not a function and
 * has a 'value.length' that's an integer greater than or equal to 0 and less than or equal to Number.
 * @param {*} value The value to check
 * @returns {boolean} Returns true if value is array-like, else false
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Funcstion)
 * // => false
 */

import isLength from "./isLength.js";

function isArrayLike(value) {
  return value != null && typeof value != "function" && isLength(value.length);
}

export default isArrayLike;
