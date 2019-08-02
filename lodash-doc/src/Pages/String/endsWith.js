import React from "react"
import endsWith from "../../String/endsWith"

const Demo = () => {
  return (
    <>
      <p className="code">检查字符串string是否以给定的target字符串结尾</p>
      <p className="code">{`endsWith('abc', 'c')`}</p>
      <p className="comment">{`// => ${String(endsWith("abc", "c"))}`}</p>
      <p className="code">{`endsWith('abc', 'b')`}</p>
      <p className="comment">{`// => ${String(endsWith("abc", "b"))}`}</p>
      <p className="code">{`endsWith('abc', 'b', 2)`}</p>
      <p className="comment">{`// => ${String(endsWith("abc", "b", 2))}`}</p>
    </>
  )
}

export default Demo
