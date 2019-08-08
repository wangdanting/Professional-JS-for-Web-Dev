import React from "react"
import inRange from "../../Number/inRange"

const Demo = () => {
  return (
    <>
      <p className="code">
        检查n是否在start与end之间，但不包括end。如果end没有指定，那么start设置为0，如果start大于end,那么参数会交换以便支持负范围。
      </p>
      <p className="code">{`inRange(3, 2, 4)`}</p>
      <p className="comment">{`// => ${String(inRange(3, 2, 4))}`}</p>
      <p className="code">{`inRange(4, 8)`}</p>
      <p className="comment">{`// => ${String(inRange(4, 8))}`}</p>
      <p className="code">{`inRange(4, 2)`}</p>
      <p className="comment">{`// => ${String(inRange(4, 2))}`}</p>
      <p className="code">{`inRange(2, 2)`}</p>
      <p className="comment">{`// => ${String(inRange(2, 2))}`}</p>
      <p className="code">{`inRange(1.2, 2)`}</p>
      <p className="comment">{`// => ${String(inRange(1.2, 2))}`}</p>
      <p className="code">{`inRange(5.2, 4)`}</p>
      <p className="comment">{`// => ${String(inRange(5.2, 4))}`}</p>
      <p className="code">{`inRange(-3, -2, -6)`}</p>
      <p className="comment">{`// => ${String(inRange(-3, -2, -6))}`}</p>
    </>
  )
}

export default Demo
