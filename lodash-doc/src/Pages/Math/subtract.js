import React from "react"
import subtract from "../../Math/subtract"

const Demo = () => {
  return (
    <>
      <p className="code">两数相减。</p>
      <p className="code">{`subtract(6, 4)`}</p>
      <p className="comment">{`// => ${String(subtract(6, 4))}`}</p>
      <p className="code">{`subtract(6, '4')`}</p>
      <p className="comment">{`// => ${String(subtract(6, "4"))}`}</p>
    </>
  )
}

export default Demo
