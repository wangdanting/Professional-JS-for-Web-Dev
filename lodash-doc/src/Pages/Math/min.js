import React from "react"
import min from "../../Math/min"

const Demo = () => {
  return (
    <>
      <p className="code">
        计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。
      </p>
      <p className="code">{`min([4, 2, 8, 6])`}</p>
      <p className="comment">{`// => ${String(min([4, 2, 8, 6]))}`}</p>
      <p className="code">{`min([])`}</p>
      <p className="comment">{`// => ${String(min([]))}`}</p>
    </>
  )
}

export default Demo
