import React from "react"
import toInteger from "../../Lang/toInteger"

const Demo = () => {
  return (
    <>
      <p className="code">Converts `value` to an integer.</p>
      <p className="code">{`toInteger(3.3)`}</p>
      <p className="comment">{`// => ${String(toInteger(3.3))}`}</p>
      <p className="code">{`toInteger('3.3')`}</p>
      <p className="comment">{`// => ${String(toInteger("3.3"))}`}</p>
      <p className="code">{`toInteger(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(
        toInteger(Number.MIN_VALUE)
      )}`}</p>
      <p className="code">{`toInteger(Infinity)`}</p>
      <p className="comment">{`// => ${String(toInteger(Infinity))}`}</p>
      <p className="code">{`toInteger(-3.3)`}</p>
      <p className="comment">{`// => ${String(toInteger(-3.3))}`}</p>
      <p className="code">{`toInteger(new Date())`}</p>
      <p className="comment">{`// => ${String(toInteger(new Date()))}`}</p>
      <p className="code">{`toInteger(() => {})`}</p>
      <p className="comment">{`// => ${String(toInteger(() => {}))}`}</p>
    </>
  )
}

export default Demo
