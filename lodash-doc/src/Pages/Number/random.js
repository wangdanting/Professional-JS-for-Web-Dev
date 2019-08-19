import React from "react"
import random from "../../Number/random"

const Demo = () => {
  return (
    <>
      <p className="code">
        产生一个包括 lower 与 upper 之间的数。
        如果只提供一个参数返回一个0到提供数之间的数。 如果 floating 设为
        true，或者 lower 或 upper 是浮点数，结果返回浮点数。
      </p>
      <p className="code">{`random(0, 5)`}</p>
      <p className="comment">{`// => ${String(random(0, 5))}`}</p>
      <p className="code">{`random(5)`}</p>
      <p className="comment">{`// => ${String(random(5))}`}</p>
      <p className="code">{`random(5, true)`}</p>
      <p className="comment">{`// => ${String(random(5, true))}`}</p>
      <p className="code">{`random(1.2, 5.2)`}</p>
      <p className="comment">{`// => ${String(random(1.2, 5.2))}`}</p>
    </>
  )
}

export default Demo
