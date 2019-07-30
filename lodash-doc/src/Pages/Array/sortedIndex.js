import React from "react"
import sortedIndex from "../../Array/sortedIndex"

const Demo = () => {
  return (
    <>
      <p className="code">
        使用二进制的方式检索来决定value值应该插入到数组中尽可能小的索引位置，以保证数组的排序
      </p>
      <p className="code">{`sortedIndex([30, 50], 40)`}</p>
      <p className="comment">{`// => ${String(sortedIndex([30, 50], 40))}`}</p>
    </>
  )
}

export default Demo
