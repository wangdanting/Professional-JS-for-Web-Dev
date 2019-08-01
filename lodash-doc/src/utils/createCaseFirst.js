/**
 * Creates a function like `lowerFirst`
 * @param {string} methodName The name of the `String` case method to use
 * @returns {Function} Returns the new case function
 */

import toString from "../Lang/toString"

function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string)

    var chr = string.charAt(0)
    var trailing = string.slice(1)

    return chr[methodName]() + trailing
  }
}

export default createCaseFirst
