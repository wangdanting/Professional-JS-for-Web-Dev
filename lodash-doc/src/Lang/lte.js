/**
 * 检查`value`是否小于等于`other`
 * Checks if `value` is less than or equal to `other`
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to campare
 * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`
 * @example
 *
 * lte(3, 1)
 * // => false
 *
 * lte(3, 3)
 * // => true
 *
 * lte(1, 3)
 * // => true
 *
 * lte('1', '3')
 * // => true
 *
 * lte(new Date('2019-05-05'), new Date('2019-03-03'))
 * // => false
 */
import createRelationalOperation from "../utils/createRelationalOperation"

var lte = createRelationalOperation(function(value, other) {
  return value <= other
})

export default lte
