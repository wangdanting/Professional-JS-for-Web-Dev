import React from "react"
import chunk from "../../Array/chunk"

const Demo = () => {
  return (
    <>
      <p className="code">
        将数组拆分成多个size长度的区块，并将这些区块组成一个新的数组。如果数组儒法被分隔成全部等长的区块，那么最后剩余的元素将组成一个区块
      </p>
      <p className="comment">
        Create an array of elements split into grounps the length of 'size'.if
        'array' cant be split evenly, the final chunk will be the remaining
        elements.
      </p>
      <p className="code">{`chunk(['a', 'b', 'c', 'd'], 2)`}</p>
      <p className="comment">{`// => [['a', 'b'], ['c', 'd']]`}</p>
      <p className="code">{`chunk(['a', 'b', 'c', 'd'], 3)`}</p>
      <p className="comment">{`// => [['a', 'b', 'c'], ['d']]`}</p>
      <p className="code">{`chunk(['a', 'b', 'c', 'd'], -1)`}</p>
      <p className="comment">{`// => []`}</p>
      <p className="code">{`chunk('66666', 2)`}</p>
      <p className="comment">{`// => [['6', '6'], ['6', '6'], ['6']]`}</p>
    </>
  )
}

export default Demo
