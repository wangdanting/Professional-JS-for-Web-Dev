import React from "react"
import words from "../../String/words"

const Demo = () => {
  return (
    <>
      <p className="code">拆分字符串string中的词为数组</p>
      <p className="code">{`words('fred, barney, & pebbles')`}</p>
      <p className="comment">{`// => ${String(
        words("fred, barney, & pebbles")
      )}`}</p>
      <p className="code">{`words('fred, barney, & pebbles', /[^, ]+/g)`}</p>
      <p className="comment">{`// => ${String(
        words("fred, barney, & pebbles", /[^, ]+/g)
      )}`}</p>
      <p className="code">{`words('\uD842\uDFB7')`}</p>
      <p className="comment">{`// => ${String(
        words("\uD842\uDFB7\uD842\uDFB7")
      )}`}</p>
    </>
  )
}

export default Demo
