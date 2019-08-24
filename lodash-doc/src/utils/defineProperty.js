import getNative from "./getNative"

var defineProperty = (function() {
  try {
    var func = getNative(Object, "defineProperty")
    func({}, "", {})
    return func
  } catch (e) {}
})()

export default defineProperty
