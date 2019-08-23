/**
 * Converts `func` to its source code
 * @param {Function} func The function to convert
 * @returns {string} Returns the source code
 */

function toSource(func) {
  if (func != null) {
    try {
      return Function.prototype.toString.call(func)
    } catch (e) {}
    try {
      return func + ""
    } catch (e) {}
  }
  return ""
}

export default toSource
