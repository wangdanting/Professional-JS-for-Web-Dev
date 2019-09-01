/**
 * The base implementation of `setData` without support for hot loop shorting
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata
 * @returns {Function} Returns `func`
 */

import { metaMap } from "../variables/global"
import identity from "../Util/identity"

var baseSetData = !metaMap
  ? identity
  : function(func, data) {
      metaMap.set(func, data)
      return func
    }

export default baseSetData
