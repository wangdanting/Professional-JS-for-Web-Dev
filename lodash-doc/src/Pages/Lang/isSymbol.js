import React from "react"
import isSymbol from "../../Lang/isSymbol"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a `Symbol` primitive or object.
      </p>
      <p className="code">{`isSymbol(Symbol(3))`}</p>
      <p className="comment">{`// => ${String(isSymbol(Symbol(3)))}`}</p>
      <p className="code">{`isSymbol({[Symbol.toStringTag]: 'Symbol'})`}</p>
      <p className="comment">{`// => ${String(
        isSymbol({ [Symbol.toStringTag]: "Symbol" })
      )}`}</p>
      <p className="code">{`isSymbol('abc')`}</p>
      <p className="comment">{`// => ${String(isSymbol("abc"))}`}</p>
    </>
  )
}

export default Demo
