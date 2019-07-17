/**
 * Checks if `value` is likely a prototype object
 * 检查value是否是原型对象
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a prototype,else `false`
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = (typeof Ctor === "function" && Ctor.prototype) || Object.prototype

  return value === proto
}

export default isPrototype
