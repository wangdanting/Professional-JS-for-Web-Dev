import React from "react"
import gt from "../../Lang/gt"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is greater than `other`</p>
      <p className="code">{`gt(3, 1)`}</p>
      <p className="comment">{`// => ${String(gt(3, 1))}`}</p>
      <p className="code">{`gt(3, 3)`}</p>
      <p className="comment">{`// => ${String(gt(3, 3))}`}</p>
      <p className="code">{`gt(1, 3)`}</p>
      <p className="comment">{`// => ${String(gt(1, 3))}`}</p>
      <p className="code">{`gt('1', '3')`}</p>
      <p className="comment">{`// => ${String(gt("1", "3"))}`}</p>
      <p className="code">{`gt(new Date('2019-05-05'), new Date('2019-03-03'))`}</p>
      <p className="comment">{`// => ${String(
        gt(new Date("2019-05-05"), new Date("2019-03-03"))
      )}`}</p>
      <p className="code">{`gt('a', 'b')`}</p>
      <p className="comment">{`// => ${String(gt("a", "b"))}`}</p>
    </>
  )
}

export default Demo
