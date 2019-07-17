import React from "react"
import isEmpty from "../../Lang/isEmpty"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is an empty object, collection, map, or set.
      </p>
      <p className="code">{`isEmpty(null)`}</p>
      <p className="comment">{`// => ${String(isEmpty(null))}`}</p>
      <p className="code">{`isEmpty(true)`}</p>
      <p className="comment">{`// => ${String(isEmpty(true))}`}</p>
      <p className="code">{`isEmpty(1)`}</p>
      <p className="comment">{`// => ${String(isEmpty(1))}`}</p>
      <p className="code">{`isEmpty([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(isEmpty([1, 2, 3]))}`}</p>
      <p className="code">{`isEmpty({ 'a': 1 })`}</p>
      <p className="comment">{`// => ${String(isEmpty({ a: 1 }))}`}</p>
    </>
  )
}

export default Demo
