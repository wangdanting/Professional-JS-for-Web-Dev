import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">根据depth递归减少array的嵌套层级</p>
      <p className="code">{`flattenDepth([1, [2, [3, [4]], 5]], 1)`}</p>
      <p className="comment">{`// => [1, 2, [3, [4]], 5]`}</p>
      <p className="code">{`flattenDepth([1, [2, [3, [4]], 5]], 2)`}</p>
      <p className="comment">{`// => [1, 2, 3, [4], 5]`}</p>
    </>
  )
}

export default Demo
