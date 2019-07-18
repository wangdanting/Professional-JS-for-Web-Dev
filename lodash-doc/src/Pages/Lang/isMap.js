import React from "react"
import isMap from "../../Lang/isMap"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is classified as a `Map` object.</p>
      <p className="code">{`isMap(new Map)`}</p>
      <p className="comment">{`// => ${String(isMap(new Map()))}`}</p>
      <p className="code">{`isMap(new WeakMap)`}</p>
      <p className="comment">{`// => ${String(isMap(new WeakMap()))}`}</p>
    </>
  )
}

export default Demo
