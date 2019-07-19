/**
 * 转换value为一个数组
 * Converts `value` to an array
 * @param {*} value The value to convert
 * @returns {Array} Returns the converted array
 * @example
 * toArray({'a': 1, 'b': 2})
 * // => [1, 2]
 * toArray('abc')
 * // => ['a', 'b', 'c']
 * toArray(1)
 * // => []
 * toArray(null)
 * // => []
 */

import isArrayLike from "./isArrayLike"
import isString from "./isString"
import stringToArray from "../utils/stringToArray"
import copyArray from "../utils/copyArray"
import mapToArray from "../utils/mapToArray"
import setToArray from "../utils/setToArray"
import { mapTag, setTag } from "../variables/Object#toString"

const symIterator = Symbol ? Symbol.iterator : undefined

// Converts `iterator` to an array.
function iteratorToArray(iterator) {
  const result = []
  let data = ""
  while (!(data = iterator.next()).done) {
    result.push(data.value)
  }
  return result
}

function toArray(value) {
  if (!value) {
    return []
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value)
  }
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]())
  }
  const tag = Object.prototype.toString.call(value)
  const func =
    tag === mapTag ? mapToArray : tag === setTag ? setToArray : Object.values

  return func(value)
}

export default toArray
