import React from "react"
import clamp from "../../Number/clamp"

const Demo = () => {
  return (
    <>
      <p className="code">
        Clamps `number` within the inclusive `lower` and `upper` bounds
      </p>
      <p className="code">{`clamp(-10, -5, 5)`}</p>
      <p className="comment">{`// => ${String(clamp(-10, -5, 5))}`}</p>
      <p className="code">{`clamp(10, -5, 5)`}</p>
      <p className="comment">{`// => ${String(clamp(10, -5, 5))}`}</p>
    </>
  )
}

export default Demo
