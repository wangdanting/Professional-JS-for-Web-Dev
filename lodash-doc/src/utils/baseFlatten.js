/**
 * The base implementation of `flatten` with support for restricting flattening
 *
 * @param {Array} array The array to flatten
 * @param {number} depth The maximum recursion depth
 * @param {boolean} [predicate=isFlattenable] The funciton invoked per iteration
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks
 * @param {Array} [result = []] The initial result value
 * @returns {Array} Returns the new flattened array
 */

import isArguments from "../Lang/isArguments"
import arrayPush from "./arrayPush"

//内置的Symbol.isConcatSpreadable符号用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素
const spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined

// Checks if `value` is a flattenable `arguments` object or array
function isFlattenable(value) {
  return (
    Array.isArray(value) ||
    isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol])
  )
}

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length

  predicate || (predicate = isFlattenable)
  result || (result = [])

  while (++index < length) {
    var value = array[index]
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        arrayPush(result, value)
      }
    } else if (!isStrict) {
      result[result.length] = value
    }
  }
  return result
}

export default baseFlatten
