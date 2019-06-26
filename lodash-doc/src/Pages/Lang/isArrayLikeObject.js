import React from "react"
import isArrayLikeObject from "../../Lang/isArrayLikeObject"

const Demo = () => {
  return (
    <>
      <p className="code">
        The method is like isArrayLike except that it also checks if value is an
        object.
      </p>
      <p className="code">{`isArrayLikeObject([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(
        isArrayLikeObject([1, 2, 3])
      )}`}</p>
      <p className="code">{`isArrayLikeObject(document.body.children)`}</p>
      <p className="comment">{`// => ${String(
        isArrayLikeObject(document.body.children)
      )}`}</p>
      <p className="code">{`isArrayLikeObject('abc')`}</p>
      <p className="comment">{`// => ${String(isArrayLikeObject("abc"))}`}</p>
      <p className="code">{`isArrayLikeObject(() => {})`}</p>
      <p className="comment">{`// => ${String(
        isArrayLikeObject(() => {})
      )}`}</p>
    </>
  )
}

export default Demo
