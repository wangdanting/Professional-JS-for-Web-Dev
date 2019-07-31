import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">获取除了array数组第一个元素以外的全部元素</p>
      <p className="code">{`tail([1, 2, 3])`}</p>
      <p className="comment">{`// => [2, 3]`}</p>
    </>
  )
}

export default Demo
