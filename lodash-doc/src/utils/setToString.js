/**
 * Sets the `toString` method of `func` to return `string`
 * @param {Function} func The func to modify
 * @param {Function} string The `toString` result
 * @returns {Function} Returns `func`
 */

import baseSetToString from "./baseSetToString"
import shortOut from "./shortOut"

var setToString = shortOut(baseSetToString)

export default setToString
