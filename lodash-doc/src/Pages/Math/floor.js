import React from "react"
import floor from "../../Math/floor"

const Demo = () => {
  return (
    <>
      <p className="code">根据 precision（精度）向下舍入 number。</p>
      <p className="code">{`floor(4.006)`}</p>
      <p className="comment">{`// => ${String(floor(4.006))}`}</p>
      <p className="code">{`floor(0.046, 2)`}</p>
      <p className="comment">{`// => ${String(floor(0.046, 2))}`}</p>
    </>
  )
}

export default Demo
