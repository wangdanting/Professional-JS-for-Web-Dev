/**
 * Checks if `string` contains Unicode symbols
 * 检查字符串是否包含Unicode字符
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`
 */

const rsZWJ = "\\u200d"
const rsAstralRange = "\\ud800-\\udfff"
const rsComboMarksRange = "\\u0300-\\u036f"
const reComboHalfMarksRange = "\\ufe20-\\ufe2f"
const rsComboSymbolsRange = "\\u20d0-\\u20ff"
const rsComboRange =
  rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange
const rsVarRange = "\\ufe0e\\ufe0f"

const reHasUnicode = new RegExp(
  "[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]"
)

function hasUnicode(string) {
  return reHasUnicode.test(string)
}

export default hasUnicode
