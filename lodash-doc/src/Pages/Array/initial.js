import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        获取数组array中除了最后一个的所有元素(去除数组array中的最后一个元素,
        返回新数组)
      </p>
      <p className="code">{`initial([1, 2, 3])`}</p>
      <p className="comment">{`// => [1, 2]`}</p>
    </>
  )
}

export default Demo
