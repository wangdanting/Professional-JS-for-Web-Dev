import React from "react"
import isArrayLike from "../../Lang/isArrayLike"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is array-like.</p>
      <p className="comment">
        A value is considered array-like if it's not a function and{" "}
      </p>
      <p className="comment">
        has a `value.length` that's an integer greater than or equal to `0` and
        less than or equal to `Number.MAX_SAFE_INTEGER`
      </p>
      <p className="code">{`isArrayLike([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(isArrayLike([1, 2, 3]))}`}</p>
      <p className="code">{`isArrayLike(document.body.children)`}</p>
      <p className="comment">{`// => ${String(
        isArrayLike(document.body.children)
      )}`}</p>
      <p className="code">{`isArrayLike('abc')`}</p>
      <p className="comment">{`// => ${String(isArrayLike("abc"))}`}</p>
      <p className="code">{`isArrayLike(() => {})`}</p>
      <p className="comment">{`// => ${String(isArrayLike(() => {}))}`}</p>
    </>
  )
}

export default Demo
