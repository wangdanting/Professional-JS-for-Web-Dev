import React from "react"
import lte from "../../Lang/lte"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is less than or equal to `other`</p>
      <p className="code">{`lte(3, 1)`}</p>
      <p className="comment">{`// => ${String(lte(3, 1))}`}</p>
      <p className="code">{`lte(3, 3)`}</p>
      <p className="comment">{`// => ${String(lte(3, 3))}`}</p>
      <p className="code">{`lte(1, 3)`}</p>
      <p className="comment">{`// => ${String(lte(1, 3))}`}</p>
      <p className="code">{`lte('1', '3')`}</p>
      <p className="comment">{`// => ${String(lte("1", "3"))}`}</p>
      <p className="code">{`lte(new Date('2019-05-05'), new Date('2019-03-03'))`}</p>
      <p className="comment">{`// => ${String(
        lte(new Date("2019-05-05"), new Date("2019-03-03"))
      )}`}</p>
      <p className="code">{`lte('a', 'b')`}</p>
      <p className="comment">{`// => ${String(lte("a", "b"))}`}</p>
    </>
  )
}

export default Demo
