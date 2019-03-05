/**
 * 将数组拆分成多个size长度的区块，并将这些区块组成一个新的数组。如果数组儒法被分隔成全部等长的区块，那么最后剩余的元素将组成一个区块
 * Create an array of elements split into grounps the length of 'size'.
 * if 'array' cant be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process
 * @param {number} {size = 1} The length of each chunk
 * @returns {Array} Returns the new array of chunks
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

import slice from "./slice";

function chunk(array, size) {
  size = Math.max(size, 0);
  const length = array === null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

export default chunk;
