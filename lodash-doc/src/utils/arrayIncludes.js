/**
 * A specialized version of `includes` for arrays without support for specifying
 * an index to search from
 * @param {Array} [array] The array to inspect
 * @param {*} target The value to search for
 * @returns {boolean} Returns `true` if `target` is found, else `false`
 */

import baseIndexOf from "../utils/baseIndexOf"

function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length
  return !!length && baseIndexOf(array, value, 0) > -1
}

export default arrayIncludes
