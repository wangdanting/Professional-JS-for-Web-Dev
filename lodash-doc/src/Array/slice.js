/**
 * 剪裁数组array, 从start位置开始到end结束，但不包括end本身的位置
 * 注意:这个方法用于代替Array#slice来确保数组正确
 * Creates a slice of 'array' from 'start' up to, but not including 'end'
 * **Note:** This method is used instead of [Array#slice] to ensure dense arrays are returned
 *
 * @param {Array} array The array to slice
 * @param {number} [start = 0] The start position. A negative index will be treated as an offset from the end
 * @param {number} [end = array.length]  The end position.  A negative index will be treated as an offset from the end
 * @returns {Array} Returns the slice of 'array'
 * @example
 *
 * slice([1, 2, 3], 0, 2)
 * // => 1,2
 *
 * slice([1, 2, 3], -2, 2)
 * // => 2
 *
 * slice([1, 2, 3], 'k', 2)
 * // => 1,2
 *
 * slice([1, 2, 3])
 * // => 1,2,3
 *
 * slice([1, 2, 3], 0.5, 2.5)
 * // => 1,2
 */

import toInteger from "../Lang/toInteger" //请搜索之前的文章 ‘转换为整数’

function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : toInteger(start)
  end = end === undefined ? length : toInteger(end)

  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : (end - start) >>> 0 // 向上取整
  start >>>= 0 // 向下取整

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

// es6 缺点不一定能返回数组
// function slice(array, start, end) {
//   return array.slice(start, end);
// }

export default slice
