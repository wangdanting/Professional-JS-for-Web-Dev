/**
 * 检查value是否是一个原生函数
 * Checks if `value` is a pristine native function
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`
 * @example
 * isNative(Array.prototype.push)
 * // => true
 * isNative(function(){})
 * // => false
 */

import baseIsNative from "../utils/baseIsNative"

function isNative(value) {
  return baseIsNative(value)
}

export default isNative
