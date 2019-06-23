import React from "react"
import eq from "../../Lang/eq"

var object = { a: 1 }
var other = { a: 1 }

const Demo = () => {
  return (
    <>
      <p className="code">
        comparison between two values to determine if they are equivalent.
      </p>
      <p className="code">{`var object = {'a': 1};  var other = {'a': 1};`}</p>
      <p className="code">{`eq(object, object)`}</p>
      <p className="comment">{`// => ${String(eq(object, object))}`}</p>
      <p className="code">{`eq(object, other)`}</p>
      <p className="comment">{`// => ${String(eq(object, other))}`}</p>
      <p className="code">{`eq(1, object.a)`}</p>
      <p className="comment">{`// => ${String(eq(1, object.a))}`}</p>
      <p className="code">{`eq('a', Object('a'))`}</p>
      <p className="comment">{`// => ${String(eq("a", Object("a")))}`}</p>
      <p className="code">{`eq(NaN, NaN)`}</p>
      <p className="comment">{`// => ${String(eq(NaN, NaN))}`}</p>
    </>
  )
}

export default Demo
