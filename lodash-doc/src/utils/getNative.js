/**
 * Gets the native function at `key` of `object`
 * @param {Object} object The object to query
 * @param {string} key The key of the method to get
 * @returns {*} Returns the function if it's native, else `undefined`
 * @example
 * getNative(Array.prototype, 'push')
 * // => ƒ push() { [native code] }
 */

import baseIsNative from "./baseIsNative"

function getValue(object, key) {
  return object == null ? undefined : object[key]
}

function getNative(object, key) {
  var value = getValue(object, key)
  return baseIsNative(value) ? value : undefined
}

export default getNative
