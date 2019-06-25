import React from "react"
import toFinite from "../../Lang/toFinite"

const Demo = () => {
  return (
    <>
      <p className="code">Converts `value` to a finite number.</p>
      <p className="code">{`toFinite(3.3)`}</p>
      <p className="comment">{`// => ${String(toFinite(3.3))}`}</p>
      <p className="code">{`toFinite(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(toFinite(Number.MIN_VALUE))}`}</p>
      <p className="code">{`toFinite(Infinity)`}</p>
      <p className="comment">{`// => ${String(toFinite(Infinity))}`}</p>
      <p className="code">{`toFinite('3.2')`}</p>
      <p className="comment">{`// => ${String(toFinite("3.2"))}`}</p>
      <p className="code">{`toFinite(NaN)`}</p>
      <p className="comment">{`// => ${String(toFinite(NaN))}`}</p>
      <p className="code">{`toFinite(new Date())`}</p>
      <p className="comment">{`// => ${String(toFinite(new Date()))}`}</p>
      <p className="code">{`toFinite(() => {}))`}</p>
      <p className="comment">{`// => ${String(toFinite(() => {}))}`}</p>
    </>
  )
}

export default Demo
