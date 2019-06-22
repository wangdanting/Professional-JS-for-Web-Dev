/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @param {*} value The value to query.
 * @returns {string} Returns the rew `toStringTag`.
 */
function getRawTag(value) {
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined
  var isOwn = Object.prototype.hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag]

  try {
    value[symToStringTag] = undefined
    var unmasked = true
  } catch (e) {}

  var result = Object.prototype.toString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export default getRawTag
