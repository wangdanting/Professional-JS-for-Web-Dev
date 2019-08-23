import React from "react"
import isNative from "../../Lang/isNative"

const Demo = () => {
  return (
    <>
      <p className="code">检查value是否是一个原生函数</p>
      <p className="code">{`isNative(Array.prototype.push)`}</p>
      <p className="comment">{`// => ${String(
        isNative(Array.prototype.push)
      )}`}</p>
      <p className="code">{`isNative(function(){})`}</p>
      <p className="comment">{`// => ${String(isNative(function() {}))}`}</p>
    </>
  )
}

export default Demo
