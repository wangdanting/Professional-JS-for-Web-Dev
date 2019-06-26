/**
 * 检查`value`是否小于other
 * Checks if `value` is less than `other`
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`
 * @example
 *
 * lt(3, 1)
 * // => false
 *
 * lt(3, 3)
 * // => false
 *
 * lt(1, 3)
 * // => true
 *
 * lt('1', '3')
 * // => true
 *
 * lt(new Date('2019-05-05'), new Date('2019-03-03'))
 * // => false
 */
import createRelationalOperation from "../utils/createRelationalOperation"

var lt = createRelationalOperation(function(value, other) {
  return value < other
})

export default lt
