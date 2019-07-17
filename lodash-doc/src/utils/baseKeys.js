/**
 * The base implementation of `keys` which doesn't treat sparse arrays as dense
 * @param {Object} object The object to query
 * @returns {Array} Returns the array of property names
 */

import isPrototype from "./isPrototype"
import overArg from "./overArg"
const nativeKeys = overArg(Object.keys, Object)

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object)
  }
  const result = []
  for (let key in Object(object)) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      key !== "constructor"
    ) {
      result.push(key)
    }
  }
  return result
}

export default baseKeys
