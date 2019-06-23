/**
 * 判断`value`是否是`Symbol`类型
 * Checks if `value` is classified as a `Symbol` primitive or Object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol(3))
 * // => true
 *
 * isSymbol({[Symbol.toStringTag]: 'Symbol'})
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */

import isObjectLike from "./isObjectLike.js"
import { symbolTag } from "../variables/Object#toString.js"

function isSymbol(value) {
  return (
    typeof value === "symbol" ||
    (isObjectLike(value) && Object.prototype.toString.call(value) === symbolTag)
  )
}

export default isSymbol
