import React from "react"
import concat from "../../Array/concat"

const Demo = () => {
  return (
    <>
      <p className="code">创建一个新数组，将array与任何数组或值连接在一起</p>
      <p className="code">{`concat([1], 2, [3], [[4]])`}</p>
      <p className="comment">{`// => [1, 2, 3, [4]]`}</p>
      <p className="code">{`concat("o", [5, 6], [3], [[4]]`}</p>
      <p className="comment">{`// => ["o", 5, 6, 3, [4]]`}</p>
    </>
  )
}

export default Demo
