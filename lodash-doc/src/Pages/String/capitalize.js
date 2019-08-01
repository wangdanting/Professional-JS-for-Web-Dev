import React from "react"
import capitalize from "../../String/capitalize"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串string首字母为大写，剩下为小写</p>
      <p className="code">{`capitalize('FRED');`}</p>
      <p className="comment">{`// => ${String(capitalize("FRED"))}`}</p>
    </>
  )
}

export default Demo
