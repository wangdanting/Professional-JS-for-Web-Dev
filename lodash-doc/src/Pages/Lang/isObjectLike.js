import React from "react"
import isObjectLike from "../../Lang/isObjectLike"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is object-like.</p>
      <p className="comment">
        (e.g. A value is object-like if it's not `null` and has a `typeof`
        result of "object".)
      </p>
      <p className="code">{`isObjectLike({})`}</p>
      <p className="comment">{`// => ${String(isObjectLike({}))}`}</p>
      <p className="code">{`isObjectLike([1, 2])`}</p>
      <p className="comment">{`// => ${String(isObjectLike([1, 2]))}`}</p>
      <p className="code">{`isObjectLike((() => {}))`}</p>
      <p className="comment">{`// => ${String(isObjectLike(() => {}))}`}</p>
      <p className="code">{`isObjectLike(null)`}</p>
      <p className="comment">{`// => ${String(isObjectLike(null))}`}</p>
    </>
  )
}

export default Demo
