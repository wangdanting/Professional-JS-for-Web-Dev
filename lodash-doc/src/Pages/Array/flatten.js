import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">减少一级array嵌套深度</p>
      <p className="code">{`flatten([1, [2, [3, [4]], 5]])`}</p>
      <p className="comment">{`// => [1, 2, [3, [4]], 5]`}</p>
    </>
  )
}

export default Demo
