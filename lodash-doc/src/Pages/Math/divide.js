import React from "react"
import divide from "../../Math/divide"

const Demo = () => {
  return (
    <>
      <p className="code">两数相除。</p>
      <p className="code">{`divide(6, 4)`}</p>
      <p className="comment">{`// => ${String(divide(6, 4))}`}</p>
      <p className="code">{`divide(6, '4')`}</p>
      <p className="comment">{`// => ${String(divide(6, "4"))}`}</p>
    </>
  )
}

export default Demo
