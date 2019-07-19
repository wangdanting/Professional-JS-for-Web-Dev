import React from "react"
import toArray from "../../Lang/toArray"

const Demo = () => {
  return (
    <>
      <p className="code">Converts `value` to an array</p>
      <p className="code">{`toArray({ 'a': 1, 'b': 2 })`}</p>
      <p className="comment">{`// => ${String(toArray({ a: 1, b: 2 }))}`}</p>
      <p className="code">{`toArray('abc')`}</p>
      <p className="comment">{`// => ${String(toArray("abc"))}`}</p>
      <p className="code">{`toArray(1)`}</p>
      <p className="comment">{`// => ${String(toArray(1))}`}</p>
      <p className="code">{`toArray(null)`}</p>
      <p className="comment">{`// => ${String(toArray(null))}`}</p>
      <p className="code">{`toArray(new Map([["name", "张三"], ["title", "Author"]]))`}</p>
      <p className="comment">{`// => ${String(
        toArray(new Map([["name", "张三"], ["title", "Author"]]))
      )}`}</p>
      <p className="code">{`toArray(new Set([1, 2, 3, 4, 4]))`}</p>
      <p className="comment">{`// => ${String(
        toArray(new Set([1, 2, 3, 4, 4]))
      )}`}</p>
    </>
  )
}

export default Demo
