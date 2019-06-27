import React from "react"
import isNil from "../../Lang/isNil"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is `null` or `undefined`</p>
      <p className="code">{`isNil(null)`}</p>
      <p className="comment">{`// => ${String(isNil(null))}`}</p>
      <p className="code">{`isNil(undefined)`}</p>
      <p className="comment">{`// => ${String(isNil(undefined))}`}</p>
      <p className="code">{`isNil(void 0)`}</p>
      <p className="comment">{`// => ${String(isNil(void 0))}`}</p>
      <p className="code">{`isNil(NaN)`}</p>
      <p className="comment">{`// => ${String(isNil(NaN))}`}</p>
    </>
  )
}

export default Demo
