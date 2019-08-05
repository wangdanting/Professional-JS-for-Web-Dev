import React from "react"
import pad from "../../String/pad"

const Demo = () => {
  return (
    <>
      <p className="code">
        如果string字符串长度小于length则从左侧和右侧填充字符，如果没法平均分配，则截断超出的长度
      </p>
      <p className="code">{`pad('abc', 8)`}</p>
      <p className="comment">{`// => ${String(pad("abc", 8))}`}</p>
      <p className="code">{`pad('abc', 8, '_-')`}</p>
      <p className="comment">{`// => ${String(pad("abc", 8, "_-"))}`}</p>
      <p className="code">{`pad('abc', 3)`}</p>
      <p className="comment">{`// => ${String(pad("abc", 3))}`}</p>
    </>
  )
}

export default Demo
