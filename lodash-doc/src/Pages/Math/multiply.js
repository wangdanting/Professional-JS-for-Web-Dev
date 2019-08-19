import React from "react"
import multiply from "../../Math/multiply"

const Demo = () => {
  return (
    <>
      <p className="code">两个数相乘。</p>
      <p className="code">{`multiply(6, 4)`}</p>
      <p className="comment">{`// => ${String(multiply(6, 4))}`}</p>
      <p className="code">{`multiply(6, '4')`}</p>
      <p className="comment">{`// => ${String(multiply(6, "4"))}`}</p>
    </>
  )
}

export default Demo
