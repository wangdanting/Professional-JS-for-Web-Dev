/**
 * The base implementation of `rest` which doesn't validate or coerce arguments
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter
 * @returns {Function} Returns the new function
 */

import setToString from "./setToString"
import overRest from "./overRest"
import identity from "../Util/identity"

function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "")
}

export default baseRest
