import React from "react"
import constant from "../../Util/constant"

const Demo = () => {
  return (
    <>
      <p className="code">创建一个返回value的函数</p>
      <p className="code">{`constant(3)()`}</p>
      <p className="comment">{`// => ${String(constant(3)())}`}</p>
    </>
  )
}

export default Demo
