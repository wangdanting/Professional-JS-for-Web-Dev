import React from "react"
import noop from "../../Util/noop"

const Demo = () => {
  return (
    <>
      <p className="code">这个方法返回undefined</p>
      <p className="code">{`noop()`}</p>
      <p className="comment">{`// => ${String(noop())}`}</p>
    </>
  )
}

export default Demo
