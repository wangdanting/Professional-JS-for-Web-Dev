import React from "react"
import indexOf from "../../Array/indexOf"

const Demo = () => {
  return (
    <>
      <p className="code">
        使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值
      </p>
      <p className="code">{`indexOf([1, 2, 1, 2], 2)`}</p>
      <p className="comment">{`// => ${String(indexOf([1, 2, 1, 2], 2))}`}</p>
      <p className="code">{`indexOf([1, 2, 1, 2], 2, 2)`}</p>
      <p className="comment">{`// => ${String(
        indexOf([1, 2, 1, 2], 2, 2)
      )}`}</p>
    </>
  )
}

export default Demo
