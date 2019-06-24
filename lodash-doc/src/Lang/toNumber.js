/**
 * Converts `value` to a number.
 *
 * @param {*} value The value to process
 * @returns {number} Returns the number.
 * @example
 *
 * toNumber('3')
 *  // => 3
 *
 * toNumber(Number.MIN_VALUE)
 *  // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('0b111110111')
 * // => 503
 *
 * toNumber('0o767')
 *  // => 503
 *
 * toNumber(new Date())
 * // => 1561389053138
 *
 * toNumber(() => {})
 *  // => NaN
 */
import isSymbol from "./isSymbol"
import isObject from "./isObject"
import { reTrim, reIsBinary, reIsOctal, reIsBadHex } from "../variables/reg"
const NAN = 0 / 0

function toNumber(value) {
  if (typeof value === "number") {
    return value
  }
  if (isSymbol(value)) {
    return NAN
  }
  // valueOf返回指定对象的原始值, new Data()例外 它返回时间戳
  if (isObject(value)) {
    var other = typeof value.valueOf === "function" ? value.valueOf() : value //判断对象中是否有valueOf这个方法
    value = isObject(other) ? other + "" : other
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value
  }
  //处理是字符串的情况
  value = value.replace(reTrim, "") //去掉前后的空格
  const isBinary = reIsBinary.test(value) //判断是否是二进制、八进制、十六进制
  return isBinary || reIsOctal.test(value)
    ? parseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value)
    ? NAN
    : +value
}

export default toNumber
