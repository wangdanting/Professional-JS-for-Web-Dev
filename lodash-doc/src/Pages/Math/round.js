import React from "react"
import round from "../../Math/round"

const Demo = () => {
  return (
    <>
      <p className="code">根据precision（精度）四舍五入 number</p>
      <p className="code">{`round(4.006)`}</p>
      <p className="comment">{`// => ${String(round(4.006))}`}</p>
      <p className="code">{`round(6.004, 2)`}</p>
      <p className="comment">{`// => ${String(round(6.006, 2))}`}</p>
    </>
  )
}

export default Demo
