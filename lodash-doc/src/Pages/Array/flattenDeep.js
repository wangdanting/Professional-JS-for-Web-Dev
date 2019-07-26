import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">将array递归为一维数组</p>
      <p className="code">{`flattenDeep([1, [2, [3, [4]], 5]])`}</p>
      <p className="comment">{`// => [1, 2, 3, 4, 5]`}</p>
    </>
  )
}

export default Demo
