import React from "react"
import padStart from "../../String/padStart"

const Demo = () => {
  return (
    <>
      <p className="code">
        如果string字符串长度小于 length 则在左侧填充字符。
        如果超出length长度则截断超出的部分
      </p>
      <p className="code">{`padStart('abc', 6)`}</p>
      <p className="comment">{`// => ${String(padStart("abc", 6))}`}</p>
      <p className="code">{`padStart('abc', 6, '_-')`}</p>
      <p className="comment">{`// => ${String(padStart("abc", 6, "_-"))}`}</p>
      <p className="code">{`padStart('abc', 3)`}</p>
      <p className="comment">{`// => ${String(padStart("abc", 3))}`}</p>
    </>
  )
}

export default Demo
