import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个切片数组，去除array前面的n个元素(n默认值为1)
      </p>
      <p className="code">{`drop([1, 2, 3])`}</p>
      <p className="comment">{`// => [2, 3]`}</p>
      <p className="code">{`drop([1, 2, 3], 2)`}</p>
      <p className="comment">{`// => [3]]`}</p>
      <p className="code">{`drop([1, 2, 3],5)`}</p>
      <p className="comment">{`// => []]`}</p>
      <p className="code">{`drop([1, 2, 3], 0)`}</p>
      <p className="comment">{`// => [1, 2, 3]]`}</p>
    </>
  )
}

export default Demo
