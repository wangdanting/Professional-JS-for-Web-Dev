import React from "react"
import upperFirst from "../../String/upperFirst"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串string的首字母为大写</p>
      <p className="code">{`upperFirst('fred')`}</p>
      <p className="comment">{`// => ${String(upperFirst("fred"))}`}</p>
      <p className="code">{`upperFirst('FRED')`}</p>
      <p className="comment">{`// => ${String(upperFirst("FRED"))}`}</p>
    </>
  )
}

export default Demo
