/**
 * 通过调用断言source的属性与object的相应属性值，检查object是否符合source。
 * Checks if `object` conforms to `source` by invoking the predicate properties of `source`
 * with the corresponding property values of `object`
 *
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`
 * @example
 *
 * var object = {'a': 1, 'b': 2}
 * conformsTo(object, {'b': function(n) {return n > 1}})
 * // => true
 *
 * conformsTo(object, {'b': function(n) {return n > 2}})
 * // => false
 */
import baseConformsTo from "../utils/baseConformsTo"
function conformsTo(object, source) {
  return source === null || baseConformsTo(object, source, Object.keys(source))
}

export default conformsTo
