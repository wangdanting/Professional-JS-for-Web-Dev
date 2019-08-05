/**
 * Gets the number of symbols in `string`
 * @param {string} string The string to inspect
 * @returns {number} Returns the string size
 */

import hasUnicode from "./hasUnicode"

// Used to compose unicode character classes.
var rsAstralRange = "\\ud800-\\udfff",
  rsComboMarksRange = "\\u0300-\\u036f",
  reComboHalfMarksRange = "\\ufe20-\\ufe2f",
  rsComboSymbolsRange = "\\u20d0-\\u20ff",
  rsComboRange =
    rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = "\\ufe0e\\ufe0f"

// Used to compose unicode capture groups.
var rsAstral = "[" + rsAstralRange + "]",
  rsCombo = "[" + rsComboRange + "]",
  rsFitz = "\\ud83c[\\udffb-\\udfff]",
  rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
  rsNonAstral = "[^" + rsAstralRange + "]",
  rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  rsZWJ = "\\u200d"

// Used to compose unicode regexes.
var rsSymbol =
  "(?:" +
  [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join(
    "|"
  ) +
  ")"

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + "?",
  rsOptVar = "[" + rsVarRange + "]?",
  rsOptJoin =
    "(?:" +
    rsZWJ +
    "(?:" +
    [rsNonAstral, rsRegional, rsSurrPair].join("|") +
    ")" +
    rsOptVar +
    reOptMod +
    ")*",
  rsSeq = rsOptVar + reOptMod + rsOptJoin

// Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode).
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g")

// Gets the size of a Unicode `string`
function unicodeSize(string) {
  var result = 0
  reUnicode.lastIndex = 0
  while (reUnicode.test(string)) {
    ++result
  }
  return result
}

function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key]
  }
}

// Gets the size of an ASCII `string`
var asciiSize = baseProperty("length")

function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string)
}

export default stringSize
