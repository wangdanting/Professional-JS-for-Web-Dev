import React from "react"
import sortedIndexOf from "../../Array/sortedIndexOf"

const Demo = () => {
  return (
    <>
      <p className="code">
        这个方法类似indexOf,除了它是在已经排序的数组array上执行二进制检索
      </p>
      <p className="code">{`sortedIndexOf([4, 5, 5, 5, 6], 5)`}</p>
      <p className="comment">{`// => ${String(
        sortedIndexOf([4, 5, 5, 5, 6], 5)
      )}`}</p>
    </>
  )
}

export default Demo
