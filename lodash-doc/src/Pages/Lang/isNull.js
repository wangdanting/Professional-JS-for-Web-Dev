import React from "react"
import isNull from "../../Lang/isNull"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is `null`</p>
      <p className="code">{`isNull(null)`}</p>
      <p className="comment">{`// => ${String(isNull(null))}`}</p>
      <p className="code">{`isNull(undefined)`}</p>
      <p className="comment">{`// => ${String(isNull(undefined))}`}</p>
      <p className="code">{`isNull(void 0)`}</p>
      <p className="comment">{`// => ${String(isNull(void 0))}`}</p>
    </>
  )
}

export default Demo
