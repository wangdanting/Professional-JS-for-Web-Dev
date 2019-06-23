import React from "react"
import isFunction from "../../Lang/isFunction"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is a `Function` Object</p>
      <p className="code">{`isFunction(() => {})`}</p>
      <p className="comment">{`// => ${String(isFunction(() => {}))}`}</p>
      <p className="code">{`isFunction(function* gen(){})`}</p>
      <p className="comment">{`// => ${String(
        isFunction(function* gen() {})
      )}`}</p>
      <p className="code">{`isFunction(async () => {})`}</p>
      <p className="comment">{`// => ${String(isFunction(async () => {}))}`}</p>
      <p className="code">{`isFunction(new Proxy({}, {}))`}</p>
      <p className="comment">{`// => ${String(
        isFunction(new Proxy({}, {}))
      )}`}</p>
      <p className="code">{`isFunction(new Map())`}</p>
      <p className="comment">{`// => ${String(isFunction(new Map()))}`}</p>
    </>
  )
}

export default Demo
