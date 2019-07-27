import React from "react"
import join from "../../Array/join"

const Demo = () => {
  return (
    <>
      <p className="code">将array中所有的元素转换为由separator分隔的字符串</p>
      <p className="code">{`join(['a', 'b', 'c'], '~')`}</p>
      <p className="comment">{`// => ${String(join(["a", "b", "c"], "~"))}`}</p>
    </>
  )
}

export default Demo
