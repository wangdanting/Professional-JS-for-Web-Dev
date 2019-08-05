import React from "react"
import padEnd from "../../String/padEnd"

const Demo = () => {
  return (
    <>
      <p className="code">
        如果string字符串长度小于length则在右侧填充字符，如果超出length长度则截断超出的部分
      </p>
      <p className="code">{`padEnd('abc', 6)`}</p>
      <p className="comment">{`// => ${String(padEnd("abc", 6))}`}</p>
      <p className="code">{`padEnd('abc', 6, '_-')`}</p>
      <p className="comment">{`// => ${String(padEnd("abc", 6, "_-"))}`}</p>
      <p className="code">{`padEnd('abc', 3)`}</p>
      <p className="comment">{`// => ${String(padEnd("abc", 3))}`}</p>
    </>
  )
}

export default Demo
