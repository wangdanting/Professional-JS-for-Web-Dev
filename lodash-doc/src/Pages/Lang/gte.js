import React from "react"
import gte from "../../Lang/gte"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is greater than `other`</p>
      <p className="code">{`gte(3, 1)`}</p>
      <p className="comment">{`// => ${String(gte(3, 1))}`}</p>
      <p className="code">{`gte(3, 3)`}</p>
      <p className="comment">{`// => ${String(gte(3, 3))}`}</p>
      <p className="code">{`gte(1, 3)`}</p>
      <p className="comment">{`// => ${String(gte(1, 3))}`}</p>
      <p className="code">{`gte('1', '1')`}</p>
      <p className="comment">{`// => ${String(gte("1", "1"))}`}</p>
      <p className="code">{`gte(new Date('2019-05-05'), new Date('2019-05-05'))`}</p>
      <p className="comment">{`// => ${String(
        gte(new Date("2019-05-05"), new Date("2019-05-05"))
      )}`}</p>
    </>
  )
}

export default Demo
