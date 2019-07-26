import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">获取数组 array 的第一个元素。</p>
      <p className="code">{`head([1, 2, 3])`}</p>
      <p className="comment">{`// => 1`}</p>
      <p className="code">{`head([])`}</p>
      <p className="comment">{`// => undefined`}</p>
    </>
  )
}

export default Demo
