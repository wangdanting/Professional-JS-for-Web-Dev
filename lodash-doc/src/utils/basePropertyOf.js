/**
 * The base implementation of `propertyOf` without support for deep paths
 * @param {Object} object The object to query
 * @returns {Function} Returns the new accessor function
 */

function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key]
  }
}

export default basePropertyOf
