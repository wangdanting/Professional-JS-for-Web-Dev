/**
 * Creates a function like `round`
 * @param {string} methodName The name of the `Math` method to use when rounding
 * @returns {Function} Returns the new round function
 */

import toNumber from "../Lang/toNumber"
import toInteger from "../Lang/toInteger"

function createRound(methodName) {
  var func = Math[methodName]
  return function(number, precision) {
    number = toNumber(number)
    precision = precision == null ? 0 : Math.min(toInteger(precision), 292)
    if (precision) {
      var pair = (String(number) + "e").split("e"),
        value = func(pair[0] + "e" + (+pair[1] + precision))

      pair = (String(value) + "e").split("e")
      return +(pair[0] + "e" + (+pair[1] - precision))
    }
    return func(number)
  }
}

export default createRound
