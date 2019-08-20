import React from "react"
import sum from "../../Math/sum"

const Demo = () => {
  return (
    <>
      <p className="code">计算 array 中值的总和</p>
      <p className="code">{`sum([4, 2, 8, 6])`}</p>
      <p className="comment">{`// => ${String(sum([4, 2, 8, 6]))}`}</p>
    </>
  )
}

export default Demo
