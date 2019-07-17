import React from "react"
import isElement from "../../Lang/isElement"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is likely a DOM element</p>
      <p className="code">{`isElement(document.body)`}</p>
      <p className="comment">{`// => ${String(isElement(document.body))}`}</p>
      <p className="code">{`isElement('<body>')`}</p>
      <p className="comment">{`// => ${String(isElement("<body>"))}`}</p>
    </>
  )
}

export default Demo
