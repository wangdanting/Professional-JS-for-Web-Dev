/**
 * 拆分字符串string中的词为数组
 * Splits `string` into an array of its words
 * @param {string} [string=''] The string to inspect
 * @param {RegExp|string} [pattern] The pattern to match words
 * @returns {Array} Returns the words of `string`
 * @example
 * words('fred, barney, & pebbles')
 * // =>['fred', 'barney', 'pebbles']
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // =>['fred', 'barney', '&', 'pebbles']
 * words("\uD842\uDFB7\uD842\uDFB7")
 * // => ['𠮷','𠮷']
 * words("--foo-bar--")
 * // => ['foo', 'bar']
 * words("__FOO_BAR__")
 * // => ['FOO', 'BAR']
 */

import toString from "../Lang/toString"

// Used to compose unicode character classes.
var rsAstralRange = "\\ud800-\\udfff",
  rsComboMarksRange = "\\u0300-\\u036f",
  reComboHalfMarksRange = "\\ufe20-\\ufe2f",
  rsComboSymbolsRange = "\\u20d0-\\u20ff",
  rsComboRange =
    rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsDingbatRange = "\\u2700-\\u27bf",
  rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
  rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
  rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  rsPunctuationRange = "\\u2000-\\u206f",
  rsSpaceRange =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  rsVarRange = "\\ufe0e\\ufe0f",
  rsBreakRange =
    rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange

// Used to compose unicode capture groups.
var rsApos = "['\u2019]",
  rsAstral = "[" + rsAstralRange + "]",
  rsBreak = "[" + rsBreakRange + "]",
  rsCombo = "[" + rsComboRange + "]",
  rsDigits = "\\d+",
  rsDingbat = "[" + rsDingbatRange + "]",
  rsLower = "[" + rsLowerRange + "]",
  rsMisc =
    "[^" +
    rsAstralRange +
    rsBreakRange +
    rsDigits +
    rsDingbatRange +
    rsLowerRange +
    rsUpperRange +
    "]",
  rsFitz = "\\ud83c[\\udffb-\\udfff]",
  rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
  rsNonAstral = "[^" + rsAstralRange + "]",
  rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  rsUpper = "[" + rsUpperRange + "]",
  rsZWJ = "\\u200d"

// Used to compose unicode regexes.
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")",
  rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")",
  rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",
  rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",
  reOptMod = rsModifier + "?",
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
  rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,
  rsSymbol =
    "(?:" +
    [
      rsNonAstral + rsCombo + "?",
      rsCombo,
      rsRegional,
      rsSurrPair,
      rsAstral
    ].join("|") +
    ")"

/** Used to match complex or compound words. */
var reUnicodeWord = new RegExp(
  [
    rsUpper +
      "?" +
      rsLower +
      "+" +
      rsOptContrLower +
      "(?=" +
      [rsBreak, rsUpper, "$"].join("|") +
      ")",
    rsMiscUpper +
      "+" +
      rsOptContrUpper +
      "(?=" +
      [rsBreak, rsUpper + rsMiscLower, "$"].join("|") +
      ")",
    rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
    rsUpper + "+" + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join("|"),
  "g"
)

// Splits a Unicode `string` into an array of its words.
function unicodeWords(string) {
  return string.match(reUnicodeWord) || []
}

// Used to match words composed of alphanumeric characters.
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

// Splits an ASCII `string` into an array of its words.
function asciiWords(string) {
  return string.match(reAsciiWord) || []
}

// Used to detect strings that need a more robust regexp to match words.
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/

// Checks if `string` contains a word composed of Unicode symbols.
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string)
}

function words(string, pattern) {
  string = toString(string)
  if (pattern === undefined) {
    // 区分Unicode与ASCII
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
  }
  return string.match(pattern) || []
}

export default words
