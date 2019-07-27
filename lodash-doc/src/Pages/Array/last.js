import React from "react"
import last from "../../Array/last"

const Demo = () => {
  return (
    <>
      <p className="code">获取array中的最后一个元素</p>
      <p className="code">{`last([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(last([1, 2, 3]))}`}</p>
      <p className="code">{`last('1234')`}</p>
      <p className="comment">{`// => ${String(last("1234"))}`}</p>
    </>
  )
}

export default Demo
