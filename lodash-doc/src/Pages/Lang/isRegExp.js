import React from "react"
import isRegExp from "../../Lang/isRegExp"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a `RegExp` object
      </p>
      <p className="code">{`isRegExp(/abc/)`}</p>
      <p className="comment">{`// => ${String(isRegExp(/abc/))}`}</p>
      <p className="code">{`isRegExp('/abc/')`}</p>
      <p className="comment">{`// => ${String(isRegExp("/abc/"))}`}</p>
    </>
  )
}

export default Demo
