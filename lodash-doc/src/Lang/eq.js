/**
 * 比较两个值以确定他们是否相等
 * comparison between two values to determine if they are equivalent.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`
 * @example
 *
 * var object = {'a': 1};
 * var other = {'a': 1};
 *
 * eq(object, object)
 * //=>true
 *
 * eq(object, other)
 * //=>false
 *
 * eq('a', 'a')
 * //=>true
 *
 * eq('a', Object('a'))
 * //=>false
 *
 * eq(NaN, NaN)
 * //=>true
 */

function eq(value, other) {
  return value === other || (value !== value && other !== other)
}

export default eq
