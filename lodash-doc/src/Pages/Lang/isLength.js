import React from "react"
import isLength from "../../Lang/isLength"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is a valid array-like length</p>
      <p className="code">{`isLength(3)`}</p>
      <p className="comment">{`// => ${String(isLength(3))}`}</p>
      <p className="code">{`isLength(Number.MAX_SAFE_INTEGER)`}</p>
      <p className="comment">{`// => ${String(
        isLength(Number.MAX_SAFE_INTEGER)
      )}`}</p>
      <p className="code">{`isLength('3')`}</p>
      <p className="comment">{`// => ${String(isLength("3"))}`}</p>
      <p className="code">{`isLength(Number.MIN_SAFE_INTEGER)`}</p>
      <p className="comment">{`// => ${String(
        isLength(Number.MIN_SAFE_INTEGER)
      )}`}</p>
      <p className="code">{`isLength(Infinity)`}</p>
      <p className="comment">{`// => ${String(isLength(Infinity))}`}</p>
    </>
  )
}

export default Demo
