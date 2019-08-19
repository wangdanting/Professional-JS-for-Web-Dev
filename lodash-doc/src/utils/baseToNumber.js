/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values
 * @param {*} value The value to process
 * @returns {number} Returns the number
 */

import isSymbol from "../Lang/isSymbol"

function baseToNumber(value) {
  if (typeof value === "number") {
    return value
  }
  if (isSymbol(value)) {
    return NaN
  }
  return +value
}

export default baseToNumber
