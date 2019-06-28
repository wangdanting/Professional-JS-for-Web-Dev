import React from "react"
import isUndefined from "../../Lang/isUndefined"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is `undefined`.</p>
      <p className="code">{`isUndefined(undefined)`}</p>
      <p className="comment">{`// => ${String(isUndefined(undefined))}`}</p>
      <p className="code">{`isUndefined(void 0)`}</p>
      <p className="comment">{`// => ${String(isUndefined(void 0))}`}</p>
      <p className="code">{`isUndefined(0)`}</p>
      <p className="comment">{`// => ${String(isUndefined(0))}`}</p>
    </>
  )
}

export default Demo
