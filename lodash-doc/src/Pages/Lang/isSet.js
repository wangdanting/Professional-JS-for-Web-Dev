import React from "react"
import isSet from "../../Lang/isSet"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is classified as a `Set` object.</p>
      <p className="code">{`isSet(new Set)`}</p>
      <p className="comment">{`// => ${String(isSet(new Set()))}`}</p>
      <p className="code">{`isSet(new WeakSet)`}</p>
      <p className="comment">{`// => ${String(isSet(new WeakSet()))}`}</p>
    </>
  )
}

export default Demo
