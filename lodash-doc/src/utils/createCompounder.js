/**
 * Creates a function like `camelCase`
 * @param {Function} callback The function to combine each word
 * @returns {Function} Returns the new compounder function
 */

import arrayReduce from "./arrayReduce"
import words from "../String/words"
import deburr from "../String/deburr"

/** Used to match apostrophes. */
var rsApos = "['\u2019]"
var reApos = new RegExp(rsApos, "g")

function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "")
  }
}

export default createCompounder
