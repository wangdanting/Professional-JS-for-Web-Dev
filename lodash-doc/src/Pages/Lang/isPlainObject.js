import React from "react"
import isPlainObject from "../../Lang/isPlainObject"

function Foo() {
  this.a = 1
}

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is a plain object, that is, an object created by the
        `Object` constructor or one with a `[[Prototype]]` of `null`.
      </p>
      <p className="code">{`isPlainObject(new Foo)`}</p>
      <p className="comment">{`// => ${String(isPlainObject(new Foo()))}`}</p>
      <p className="code">{`isPlainObject([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(isPlainObject([1, 2, 3]))}`}</p>
      <p className="code">{`isPlainObject({ 'x': 0, 'y': 0 })`}</p>
      <p className="comment">{`// => ${String(
        isPlainObject({ x: 0, y: 0 })
      )}`}</p>
      <p className="code">{`isPlainObject(Object.create(null))`}</p>
      <p className="comment">{`// => ${String(
        isPlainObject(Object.create(null))
      )}`}</p>
    </>
  )
}

export default Demo
