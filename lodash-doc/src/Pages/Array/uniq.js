import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个去重后的array数组副本，使用了全等比较，只有第一次出现的元素才会被保留
      </p>
      <p className="code">{`uniq([1, 3, 3, NaN, NaN])`}</p>
      <p className="comment">{`// => [1, 3, NaN]`}</p>
    </>
  )
}

export default Demo
