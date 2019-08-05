/**
 * The base implementation of `repeat` which doesn't coerce arguments
 * @param {string} string The string to repeat
 * @param {number} n The number of times to repeat the string
 * @returns {string} Returns the repeated string
 */

function baseRepeat(string, n) {
  var result = ""
  if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result
  }

  // 通过平方算法利用取幂来实现更快的重复。
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string
    }
    n = Math.floor(n / 2)
    if (n) {
      string += string
    }
  } while (n)

  return result
}

export default baseRepeat
