import React from "react"
import isWeakMap from "../../Lang/isWeakMap"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a `WeakMap` object.
      </p>
      <p className="code">{`isWeakMap(new WeakMap())`}</p>
      <p className="comment">{`// => ${String(isWeakMap(new WeakMap()))}`}</p>
      <p className="code">{`isWeakMap(new Map())`}</p>
      <p className="comment">{`// => ${String(isWeakMap(new Map()))}`}</p>
    </>
  )
}

export default Demo
