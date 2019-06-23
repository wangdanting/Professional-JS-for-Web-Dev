/**
 * 检查`value`是否是有效的`类数组`的index
 * Checks if `value` is a valid array-like index
 *
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a value index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`
 */

import { reIsUint } from "../variables/reg"
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991

function isIndex(value, length) {
  var type = typeof value,
    len = length == null ? MAX_SAFE_INTEGER : length

  return (
    !!len &&
    (type === "number" || (type !== "symbol" && reIsUint.test(value))) &&
    (value > -1 && value % 1 === 0 && value < len)
  )
}

//es6
// const isIndex = (value, length = MAX_SAFE_INTEGER) => {
//   const type = typeof value
//   return !!length && type !== "symbol" && Number.isInteger(Number(value))
// }

export default isIndex
