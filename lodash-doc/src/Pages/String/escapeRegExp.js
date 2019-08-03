import React from "react"
import escapeRegExp from "../../String/escapeRegExp"

const Demo = () => {
  return (
    <>
      <p className="code">
        转义RegExp字符串中特殊的字符"^", "$", "\", ".", "*", "+", "?", "(", ")",
        "[", "]", "{", "}", and "|"
      </p>
      <p className="code">{`escapeRegExp('[lodash](https://lodash.com/)')`}</p>
      <p className="comment">{`// => ${String(
        escapeRegExp("[lodash](https://lodash.com/)")
      )}`}</p>
    </>
  )
}

export default Demo
