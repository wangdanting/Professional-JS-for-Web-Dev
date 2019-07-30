import React from "react"
import sortedLastIndex from "../../Array/sortedLastIndex"

const Demo = () => {
  return (
    <>
      <p className="code">
        使用二进制的方式检索来决定value值应该插入到数组中尽可能大的索引位置，以保证数组的排序
      </p>
      <p className="code">{`sortedLastIndex([4, 5, 5, 5, 6], 5)`}</p>
      <p className="comment">{`// => ${String(
        sortedLastIndex([4, 5, 5, 5, 6], 5)
      )}`}</p>
    </>
  )
}

export default Demo
