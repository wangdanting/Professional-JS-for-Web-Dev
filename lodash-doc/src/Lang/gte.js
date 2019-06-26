/**
 * 检查`value`是否大于或者等于`other`.
 * Checks if `value` is greater than or equal to `other`.
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`
 * @example
 *
 * gte(3, 1)
 * // => true
 * gte(3, 3)
 * // => true
 *
 * gte(1, 3)
 * // => false
 *
 * gte('1', '1')
 * // => true
 *
 * gte(new Date('2019-05-05'), new Date('2019-05-05'))
 * // => true
 */

import createRelationalOperation from "../utils/createRelationalOperation"

var gte = createRelationalOperation(function(value, other) {
  return value >= other
})

export default gte
