import React from "react"
import lowerFirst from "../../String/lowerFirst"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串string的首字母为小写</p>
      <p className="code">{`lowerFirst('Fred')`}</p>
      <p className="comment">{`// => ${String(lowerFirst("Fred"))}`}</p>
      <p className="code">{`lowerFirst('FRED')`}</p>
      <p className="comment">{`// => ${String(lowerFirst("FRED"))}`}</p>
    </>
  )
}

export default Demo
