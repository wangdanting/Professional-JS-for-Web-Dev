import React from "react"
import isString from "../../Lang/isString"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a `String` primitive or object..
      </p>
      <p className="code">{`isString('1')`}</p>
      <p className="comment">{`// => ${String(isString("1"))}`}</p>
      <p className="code">{`isString(new String('1'))`}</p>
      <p className="comment">{`// => ${String(isString(new String("1")))}`}</p>
      <p className="code">{`isString(1)`}</p>
      <p className="comment">{`// => ${String(isString(1))}`}</p>
    </>
  )
}

export default Demo
