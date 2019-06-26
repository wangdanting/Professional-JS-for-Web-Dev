import React from "react"
import isNaN from "../../Lang/isNaN"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is `NaN`</p>
      <p className="code">{`isNaN(NaN)`}</p>
      <p className="comment">{`// => ${String(isNaN(NaN))}`}</p>
      <p className="code">{`isNaN(new Number(NaN))`}</p>
      <p className="comment">{`// => ${String(isNaN(new Number(NaN)))}`}</p>
      <p className="code">{`isNaN(undefined)`}</p>
      <p className="comment">{`// => ${String(isNaN(undefined))}`}</p>
    </>
  )
}

export default Demo
