import React from "react"
import isError from "../../Lang/isError"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is an
        `Error`,`EvalError`,`RangeError`,`ReferenceError`,`SyntaxError`,`TypeError`,
        `URIError`object
      </p>
      <p className="code">{`isError(new Error())`}</p>
      <p className="comment">{`// => ${String(isError(new Error()))}`}</p>
      <p className="code">{`isError(Error)`}</p>
      <p className="comment">{`// => ${String(isError(Error))}`}</p>
    </>
  )
}

export default Demo
