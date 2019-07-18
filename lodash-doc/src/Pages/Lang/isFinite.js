import React from "react"
import isFinite from "../../Lang/isFinite"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is a finite primitive number.</p>
      <p className="code">{`isFinite(3)`}</p>
      <p className="comment">{`// => ${String(isFinite(3))}`}</p>
      <p className="code">{`isFinite(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(isFinite(Number.MIN_VALUE))}`}</p>
      <p className="code">{`isFinite(Infinity)`}</p>
      <p className="comment">{`// => ${String(isFinite(Infinity))}`}</p>
      <p className="code">{`isFinite('3')`}</p>
      <p className="comment">{`// => ${String(isFinite("3"))}`}</p>
    </>
  )
}

export default Demo
