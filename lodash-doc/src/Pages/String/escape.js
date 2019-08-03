import React from "react"
import escape from "../../String/escape"

const Demo = () => {
  return (
    <>
      <p className="code">
        转义字符串中的'&', '&lt;', '&gt;', '"', "'", "`" 字符为HTML实体字符
      </p>
      <p className="code">{`escape('fred, barney, & pebbles')`}</p>
      <p className="comment">{`// => ${String(
        escape("fred, barney, & pebbles")
      )}`}</p>
    </>
  )
}

export default Demo
