import React from "react"
import startsWith from "../../String/startsWith"

const Demo = () => {
  return (
    <>
      <p className="code">检查字符串string是否以 target 开头</p>
      <p className="code">{`startsWith('abc', 'a')`}</p>
      <p className="comment">{`// => ${String(startsWith("abc", "a"))}`}</p>
      <p className="code">{`startsWith('abc', 'b')`}</p>
      <p className="comment">{`// => ${String(startsWith("abc", "b"))}`}</p>
      <p className="code">{`startsWith('abc', 'b', 1)`}</p>
      <p className="comment">{`// => ${String(startsWith("abc", "b", 1))}`}</p>
    </>
  )
}

export default Demo
