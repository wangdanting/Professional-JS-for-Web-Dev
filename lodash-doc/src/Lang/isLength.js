/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;

/**
 * 检查values是否为有效的类数组长度
 * Checks if 'value' is a valid array-like length
 * @param {*} value the value to check
 * @returns {boolean} Returns 'true' if 'value' is a valid length, else 'false'
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */

function isLength(value) {
  return (
    typeof value == "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}

// const isLength = value => {
//   return Number.isInteger(value);
// };

export default isLength;
