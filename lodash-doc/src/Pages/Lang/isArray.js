import React from "react"
import isArray from "../../Lang/isArray"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as an `Array` object.
      </p>
      <p className="code">{`isArray([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(isArray([1, 2, 3]))}`}</p>
      <p className="code">{`isArray(document.body.children)`}</p>
      <p className="comment">{`// => ${String(
        isArray(document.body.children)
      )}`}</p>
      <p className="code">{`isArray('abc')`}</p>
      <p className="comment">{`// => ${String(isArray("abc"))}`}</p>
      <p className="code">{`isArray(() => {})`}</p>
      <p className="comment">{`// => ${String(isArray(() => {}))}`}</p>
    </>
  )
}

export default Demo
