import React from "react"
import add from "../../Math/add"

const Demo = () => {
  return (
    <>
      <p className="code">两个数相加。</p>
      <p className="code">{`add(6, 4)`}</p>
      <p className="comment">{`// => ${String(add(6, 4))}`}</p>
      <p className="code">{`add(6, '4')`}</p>
      <p className="comment">{`// => ${String(add(6, "4"))}`}</p>
    </>
  )
}

export default Demo
