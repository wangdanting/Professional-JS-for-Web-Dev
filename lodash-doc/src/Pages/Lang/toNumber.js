import React from "react"
import toNumber from "../../Lang/toNumber"

const Demo = () => {
  return (
    <>
      <p className="code">Converts `value` to a number.</p>
      <p className="code">{`toNumber('3')`}</p>
      <p className="comment">{`// => ${String(toNumber("3"))}`}</p>
      <p className="code">{`toNumber(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(toNumber(Number.MIN_VALUE))}`}</p>
      <p className="code">{`toNumber(Infinity)`}</p>
      <p className="comment">{`// => ${String(toNumber(Infinity))}`}</p>
      <p className="code">{`toNumber('0b111110111')`}</p>
      <p className="comment">{`// => ${String(toNumber("0b111110111"))}`}</p>
      <p className="code">{`toNumber('0o767')`}</p>
      <p className="comment">{`// => ${String(toNumber("0o767"))}`}</p>
      <p className="code">{`toNumber(new Date())`}</p>
      <p className="comment">{`// => ${String(toNumber(new Date()))}`}</p>
      <p className="code">{`toNumber(() => {})`}</p>
      <p className="comment">{`// => ${String(toNumber(() => {}))}`}</p>
    </>
  )
}

export default Demo
