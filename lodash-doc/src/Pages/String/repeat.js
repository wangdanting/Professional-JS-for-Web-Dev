import React from "react"
import repeat from "../../String/repeat"

const Demo = () => {
  return (
    <>
      <p className="code">重复N次给定字符串</p>
      <p className="code">{`repeat('*', 3)`}</p>
      <p className="comment">{`// => ${String(repeat("*", 3))}`}</p>
      <p className="code">{`repeat('abc', 2)`}</p>
      <p className="comment">{`// => ${String(repeat("abc", 2))}`}</p>
      <p className="code">{`repeat('abc', 0)`}</p>
      <p className="comment">{`// => ${String(repeat("abc", 0))}`}</p>
    </>
  )
}

export default Demo
