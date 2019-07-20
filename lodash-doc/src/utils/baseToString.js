import { isArray } from "util"

/**
 * The base implementation of `toString` which doesn't convert nullish values to empty strings
 * @param {*} value The value to process
 * @returns {string} Returns the string
 */

import arrayMap from "./arrayMap"
import isSymbol from "../Lang/isSymbol"
function baseToString(value) {
  if (typeof value === "string") {
    return value
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + ""
  }
  if (isSymbol(value)) {
    return Symbol.prototype.toString
      ? Symbol.prototype.toString.call(value)
      : ""
  }
  var result = value + ""
  return result == "0" && 1 / value == -Infinity ? "-0" : result
}

export default baseToString
