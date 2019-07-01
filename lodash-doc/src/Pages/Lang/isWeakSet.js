import React from "react"
import isWeakSet from "../../Lang/isWeakSet"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value`is classified as a `WeakSet` object.
      </p>
      <p className="code">{`isWeakSet(new WeakSet())`}</p>
      <p className="comment">{`// => ${String(isWeakSet(new WeakSet()))}`}</p>
      <p className="code">{`isWeakSet(new Set())`}</p>
      <p className="comment">{`// => ${String(isWeakSet(new Set()))}`}</p>
    </>
  )
}

export default Demo
