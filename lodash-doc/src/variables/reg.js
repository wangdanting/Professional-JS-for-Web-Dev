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
