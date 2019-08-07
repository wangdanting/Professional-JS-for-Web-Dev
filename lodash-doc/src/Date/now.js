/**
 * 获得Unix纪元(1 January 1970 00:00:00 UTC) 直到现在的毫秒数
 * Gets the timestamp of the number of milliseconds that have elapsed
 * since the Unix epoch (1 January 1970 00:00:00 UTC)
 * @returns {number} Returns the timestamp
 * @example
 * now()
 * // => 1565190450535
 */

var now = () => Date.now()

export default now
