import React from "react"
import max from "../../Math/max"

const Demo = () => {
  return (
    <>
      <p className="code">
        计算array中的最大值，如果array是空的或者是非数组则返回undefined
      </p>
      <p className="code">{`max([4, 2, 8, 6])`}</p>
      <p className="comment">{`// => ${String(max([4, 2, 8, 6]))}`}</p>
      <p className="code">{`max([])`}</p>
      <p className="comment">{`// => ${String(max([]))}`}</p>
    </>
  )
}

export default Demo
