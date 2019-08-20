import React from "react"
import mean from "../../Math/mean"

const Demo = () => {
  return (
    <>
      <p className="code">计算array的平均值。</p>
      <p className="code">{`mean([4, 2, 8, 6])`}</p>
      <p className="comment">{`// => ${String(mean([4, 2, 8, 6]))}`}</p>
    </>
  )
}

export default Demo
