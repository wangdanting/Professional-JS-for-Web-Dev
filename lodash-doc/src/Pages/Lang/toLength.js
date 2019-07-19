import React from "react"
import toLength from "../../Lang/toLength"

const Demo = () => {
  return (
    <>
      <p className="code">
        Converts `value` to an integer suitable for use as the length of an
        array-like object
      </p>
      <p className="code">{`toLength(3.2)`}</p>
      <p className="comment">{`// => ${String(toLength(3.2))}`}</p>
      <p className="code">{`toLength(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(toLength(Number.MIN_VALUE))}`}</p>
      <p className="code">{`toLength(Infinity)`}</p>
      <p className="comment">{`// => ${String(toLength(Infinity))}`}</p>
      <p className="code">{`toLength('3.2')`}</p>
      <p className="comment">{`// => ${String(toLength("3.2"))}`}</p>
    </>
  )
}

export default Demo
