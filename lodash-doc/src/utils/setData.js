/**
 * Sets matadata for `func`
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip it's breaker and transition to an identity
 * function to avoid garbage collection pauses in V8
 * @param {Function} func The function to associate metadata with
 * @param {*} data The metadata
 * @returns {Function} Returns `func`
 */

import shortOut from "./shortOut"
import baseSetData from "./baseSetData"

var setData = shortOut(baseSetData)

export default setData
