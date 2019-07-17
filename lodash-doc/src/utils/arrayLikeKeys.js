/**
 * Creates an array of the enumerable property names of the array-like `value`
 *
 * @param {*} value The value to query
 * @returns {Array} Returns the array of property names
 */
import isArray from "../Lang/isArray"
import isArguments from "../Lang/isArguments"
import baseTimes from "../utils/baseTimes"
import isString from "../Lang/isString"
function arrayLikeKeys(value) {
  const isArr = isArray(value)
  const isArg = isArguments(value)
  const result = isArr || isArg ? baseTimes(value.length, String) : []
  if (isString(value)) {
    for (let key in value) {
      result.push(key)
    }
  }
  return result
}

export default arrayLikeKeys
