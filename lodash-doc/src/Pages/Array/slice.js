import React from "react"
import slice from "../../Array/slice"

const Demo = () => {
  return (
    <>
      <p className="code">
        剪裁数组array, 从start位置开始到end结束，但不包括end本身的位置
      </p>
      <p className="comment">
        Creates a slice of 'array' from 'start' up to, but not including 'end'
      </p>
      <p className="code">{`slice([1, 2, 3], 0, 2)`}</p>
      <p className="comment">{`// => [1, 2]`}</p>
      <p className="code">{`slice([1, 2, 3], -2, 2)`}</p>
      <p className="comment">{`// => [2]}`}</p>
      <p className="code">{`slice([1, 2, 3], 'k', 2)`}</p>
      <p className="comment">{`// => [1, 2]`}</p>
      <p className="code">{`slice([1, 2, 3])`}</p>
      <p className="comment">{`// => [1, 2, 3]`}</p>
      <p className="code">{`slice([1, 2, 3], 0.5, 2.5)`}</p>
      <p className="comment">{`// => [1, 2]`}</p>
    </>
  )
}

export default Demo
