/**
 * Gets metadata for `func`
 * @param {Function} func The function to query
 * @returns {*} Returns the metadata for `func`
 */
import noop from "../Util/noop"
import { metaMap } from "../variables/global"

var getData = !metaMap
  ? noop
  : function(func) {
      return metaMap.get(func)
    }

export default getData
