/**
 * 反转array, 使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，以此类推
 * **注意：**：这个方法会改变原数组array
 * Reverses `array` so that the first element becomes the last, the second element becomes
 * this second to last, and so on.
 * **Notes:** This method mutates `array` and is based on
 * @param {Array} array The array to modify
 * @returns {Array} Returns `array`
 * @example
 * var array = [1, 2, 3];
 * reverse(array)
 * // => [3, 2, 1]
 * console.log(array)
 * // => [3, 2, 1]
 */

function reverse(array) {
  return array == null ? array : Array.prototype.reverse.call(array)
}

export default reverse
