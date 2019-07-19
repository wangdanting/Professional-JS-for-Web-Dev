import React from "react"
import toSafeInteger from "../../Lang/toSafeInteger"

const Demo = () => {
  return (
    <>
      <p className="code">
        Converts `value` to a safe integer. A safe integer can be compared and
        represented correctly.
      </p>
      <p className="code">{`toSafeInteger(3.2)`}</p>
      <p className="comment">{`// => ${String(toSafeInteger(3.2))}`}</p>
      <p className="code">{`toSafeInteger(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(
        toSafeInteger(Number.MIN_VALUE)
      )}`}</p>
      <p className="code">{`toSafeInteger(Infinity)`}</p>
      <p className="comment">{`// => ${String(toSafeInteger(Infinity))}`}</p>
      <p className="code">{`toSafeInteger('3.2')`}</p>
      <p className="comment">{`// => ${String(toSafeInteger("3.2"))}`}</p>
    </>
  )
}

export default Demo
