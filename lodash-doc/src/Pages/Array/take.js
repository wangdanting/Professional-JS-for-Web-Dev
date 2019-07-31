import React from "react"
import take from "../../Array/take"

console.log(take([1, 2, 3], 0), "pp")

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个数组切片，从array数组的起始元素开始提取n个元素
      </p>
      <p className="code">{`take([1, 2, 3])`}</p>
      <p className="comment">{`// => [1]`}</p>
      <p className="code">{`take([1, 2, 3], 2)`}</p>
      <p className="comment">{`// => [1, 2]`}</p>
      <p className="code">{`take([1, 2, 3], 5)`}</p>
      <p className="comment">{`// => [1, 2, 3]`}</p>
      <p className="code">{`take([1, 2, 3], 0)`}</p>
      <p className="comment">{`// => []`}</p>
    </>
  )
}

export default Demo
