import isObject from "./isObject"
import baseGetTag from "../utils/baseGetTag"
import {
  funcTag,
  genTag,
  objectTag,
  argsTag
} from "../variables/Object#toString"

var CLONE_DEEP_FLAG = 1
var CLONE_FLAT_FLAG = 2
var CLONE_SYMBOLS_FLAG = 4

function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length)

  //判断是否是String.prototype.match()方法检索返回一个字符串匹配正则表达式的的结果。
  if (
    length &&
    typeof array[0] === "string" &&
    Object.prototype.hasOwnProperty.call(array, "index")
  ) {
    result.index = array.index
    result.input = array.input
  }

  return result
}

function copyArray(source, array) {
  var index = -1,
    length = source.length

  array || (array = Array(length))
  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = (typeof Ctor === "function" && Ctor.prototype) || Object.prototype

  return value === proto
}

var baseCreate = (function() {
  function Obj() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {}
    }
    if (Object.create) {
      return Object.create(proto)
    }
    Obj.prototype = proto
    var result = new Obj()
    Obj.prototype = undefined
    return result
  }
})()

function initCloneObject(object) {
  return typeof object.constructor === "function" && !isPrototype(object)
    ? baseCreate(Object.getPrototypeOf(object))
    : {}
}

function copyObject() {}

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value)
  }
  if (result !== undefined) {
    return result
  }

  if (!isObject(value)) {
    return value
  }

  var isArr = Array.isArray(value)
  if (isArr) {
    result = initCloneArray(value)
    if (!isDeep) {
      return copyArray(value, result)
    }
  } else {
    var tag = baseGetTag(value),
      isFunc = tag === funcTag || tag === genTag

    // 如果是buffer,占位，不会

    if (tag === objectTag || tag === argsTag || (isFunc && !object)) {
      result = isFlat || isFunc ? {} : initCloneObject(value)
      if (!isDeep) {
        // return isFlat ?
      }
    }
  }
}

function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG)
}
