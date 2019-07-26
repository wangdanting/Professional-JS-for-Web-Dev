import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个切片数组，去除array尾部的n个元素(n的默认值为1)
      </p>
      <p className="code">{`dropRight([1, 2, 3])`}</p>
      <p className="comment">{`// => [1, 2]`}</p>
      <p className="code">{`dropRight([1, 2, 3], 2)`}</p>
      <p className="comment">{`// => [1]]`}</p>
      <p className="code">{`dropRight([1, 2, 3],5)`}</p>
      <p className="comment">{`// => []]`}</p>
      <p className="code">{`dropRight([1, 2, 3], 0)`}</p>
      <p className="comment">{`// => [1, 2, 3]]`}</p>
    </>
  )
}

export default Demo
