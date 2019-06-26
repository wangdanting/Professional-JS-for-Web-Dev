import React from "react"
import isBoolean from "../../Lang/isBoolean"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a boolean primitive or object
      </p>
      <p className="code">{`isBoolean(false)`}</p>
      <p className="comment">{`// => ${String(isBoolean(false))}`}</p>
      <p className="code">{`isBoolean(1)`}</p>
      <p className="comment">{`// => ${String(isBoolean(1))}`}</p>
      <p className="code">{`isBoolean(null)`}</p>
      <p className="comment">{`// => ${String(isBoolean(null))}`}</p>
    </>
  )
}

export default Demo
