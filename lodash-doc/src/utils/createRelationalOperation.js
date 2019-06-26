/**
 * 创建一个对两个值执行关系运算的函数。
 * Creates a function that performs a relational opration on two value.
 *
 * @param {Function} operator The function to perform the operation.
 * @returns {Function} Returns the new relational opration function.
 */

import toNumber from "../Lang/toNumber"
function createRelationalOperation(operator) {
  return function(value, other) {
    if (typeof value !== "number") {
      value = toNumber(value)
    }
    if (typeof other !== "number") {
      other = toNumber(other)
    }
    return operator(value, other)
  }
}

export default createRelationalOperation
