/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, '', undefined, NaN都被认为是假值
 * Creates an array with all falsey values removed. The values false, null, 0, '', undefined, NaN are falsey
 *
 * @param {Array} array The array to compact
 * @returns {Array} Returns the new array of filtered values
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

function compact(array) {
  let index = 0
  const result = []

  if (array == null) {
    return array
  }

  for (const value of array) {
    if (value) {
      result[index++] = value
    }
  }
  return result
}

// es6
// const compact = (array = []) => {
//   if (!Array.isArray(array)) {
//     return [];
//   }
//   return array.filter(item => item);
// };

export default compact
