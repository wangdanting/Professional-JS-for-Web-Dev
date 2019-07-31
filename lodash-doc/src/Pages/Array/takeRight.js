import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个数组切片，从array数组的最后一个元素开始提取n个元素
      </p>
      <p className="code">{`takeRight([1, 2, 3])`}</p>
      <p className="comment">{`// => [3]`}</p>
      <p className="code">{`takeRight([1, 2, 3], 2)`}</p>
      <p className="comment">{`// => [2, 3]`}</p>
      <p className="code">{`takeRight([1, 2, 3], 5)`}</p>
      <p className="comment">{`// => [1, 2, 3]`}</p>
      <p className="code">{`takeRight([1, 2, 3], 0)`}</p>
      <p className="comment">{`// => []`}</p>
    </>
  )
}

export default Demo
