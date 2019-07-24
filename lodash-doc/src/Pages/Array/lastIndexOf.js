import React from "react"
import lastIndexOf from "../../Array/lastIndexOf"

const Demo = () => {
  return (
    <>
      <p className="code">
        使用 SameValueZero 等值比较，返回首次 value
        在数组array中被找到的索引值,从右向左找
      </p>
      <p className="code">{`indexOf([1, 2, 1, 2], 2)`}</p>
      <p className="comment">{`// => ${String(
        lastIndexOf([1, 2, 1, 2], 2)
      )}`}</p>
      <p className="code">{`indexOf([1, 2, 1, 2], 2, 2)`}</p>
      <p className="comment">{`// => ${String(
        lastIndexOf([1, 2, 1, 2], 2, 2)
      )}`}</p>
    </>
  )
}

export default Demo
