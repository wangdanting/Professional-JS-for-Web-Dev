/**
 * 检查`value`是否大于或者等于`other`.
 * Checks if `value` is greater than or equal to `other`.
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`
 * @example
 *
 */

import createRelationalOperation from "../utils/createRelationalOperation"

var gte = createRelationalOperation(function(value, other) {
  return value >= other
})

export default gte
