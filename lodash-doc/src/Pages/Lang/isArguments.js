import React from "react"
import isArguments from "../../Lang/isArguments"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is likely an `arguments` object</p>
      <p className="code">{`isArguments(function(){return arguments;}())`}</p>
      <p className="comment">{`// => ${String(
        isArguments(
          (function() {
            return arguments
          })()
        )
      )}`}</p>
      <p className="code">{`isArguments([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(isArguments([1, 2, 3]))}`}</p>
    </>
  )
}

export default Demo
