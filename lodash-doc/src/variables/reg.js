/**
 * 检查是否是正整数
 * Used to detect unsigned integer values.
 * @example
 * reIsUint.test(1);
 * //=>true
 *
 * reIsUint.test(0);
 * //=>true
 *
 * reIsUint.test(Number.MAX_SAFE_INTEGER);
 * //=>true
 *
 * reIsUint.test('3');
 * //=>true
 *
 * reIsUint.test(-1);
 * //=>false
 *
 * reIsUint.test(3.3);
 * //=>false
 */
export const reIsUint = /^(?:0|[1-9]\d*)$/

/** 匹配字符串前面和后面的空白 */
/** Used to match leading and trailing whitespace. */
export const reTrim = /^\s+|\s+$/g

/** 匹配二进制 */
/** Used to detect binary string values. */
export const reIsBinary = /^0b[01]+$/i

/** 匹配八进制 */
/** Used to detect octal string values */
export const reIsOctal = /^0o[0-7]+$/i

/** 匹配十六进制 */
export const reIsBadHex = /^[-+]0x[0-9a-f]+$/i
