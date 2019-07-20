import React from "react"
import toString from "../../Lang/toString"

const Demo = () => {
  return (
    <>
      <p className="code">
        Converts `value` to a string. An empty string is returned for `null` and
        `undefined` values. The sign of `-0` is preserved.
      </p>
      <p className="code">{`toString(null)`}</p>
      <p className="comment">{`// => ${String(toString(null))}`}</p>
      <p className="code">{`toString(-0)`}</p>
      <p className="comment">{`// => ${String(toString(-0))}`}</p>
      <p className="code">{`toString([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(toString([1, 2, 3]))}`}</p>
      <p className="code">{`toString({a: 1})`}</p>
      <p className="comment">{`// => ${String(toString({ a: 1 }))}`}</p>
      <p className="code">对比</p>
      <p className="code">{`String(null)`}</p>
      <p className="comment">{`// => ${String(String(null))}`}</p>
      <p className="code">{`String(-0)`}</p>
      <p className="comment">{`// => ${String(String(-0))}`}</p>
      <p className="code">{`String([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(String([1, 2, 3]))}`}</p>
      <p className="code">{`String({a: 1})`}</p>
      <p className="comment">{`// => ${String(String({ a: 1 }))}`}</p>
    </>
  )
}

export default Demo
