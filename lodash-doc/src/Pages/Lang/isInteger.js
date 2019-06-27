import React from "react"
import isInteger from "../../Lang/isInteger"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is an integer</p>
      <p className="code">{`isInteger(3)`}</p>
      <p className="comment">{`// => ${String(isInteger(3))}`}</p>
      <p className="code">{`isInteger(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(
        isInteger(Number.MIN_VALUE)
      )}`}</p>
      <p className="code">{`isInteger(Infinity)`}</p>
      <p className="comment">{`// => ${String(isInteger(Infinity))}`}</p>
      <p className="code">{`isInteger('3')`}</p>
      <p className="comment">{`// => ${String(isInteger("3"))}`}</p>
    </>
  )
}

export default Demo
