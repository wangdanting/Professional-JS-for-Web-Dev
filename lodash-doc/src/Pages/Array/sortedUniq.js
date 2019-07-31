import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个去重后的数组副本，这只会优化已经排序好的数组
      </p>
      <p className="code">{`sortedUniq([1, 1, 2, 4, 4])`}</p>
      <p className="comment">{`// => [1, 2, 4]`}</p>
    </>
  )
}

export default Demo
