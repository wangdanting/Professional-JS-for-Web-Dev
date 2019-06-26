import React from "react"
import isNumber from "../../Lang/isNumber"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a `Number` primitive or object
      </p>
      <p className="code">{`isNumber(3)`}</p>
      <p className="comment">{`// => ${String(isNumber(3))}`}</p>
      <p className="code">{`isNumber(new Number(3))`}</p>
      <p className="comment">{`// => ${String(isNumber(new Number(3)))}`}</p>
      <p className="code">{`isNumber(NaN)`}</p>
      <p className="comment">{`// => ${String(isNumber(NaN))}`}</p>
      <p className="code">{`isNumber(undefined)`}</p>
      <p className="comment">{`// => ${String(isNumber(undefined))}`}</p>
      <p className="code">{`isNumber('3')`}</p>
      <p className="comment">{`// => ${String(isNumber("3"))}`}</p>
    </>
  )
}

export default Demo
