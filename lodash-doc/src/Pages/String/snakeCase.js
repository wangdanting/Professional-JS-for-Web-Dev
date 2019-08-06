import React from "react"
import snakeCase from "../../String/snakeCase"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串为下滑线连接格式</p>
      <p className="code">{`snakeCase('Foo Bar')`}</p>
      <p className="comment">{`// => ${String(snakeCase("Foo Bar"))}`}</p>
      <p className="code">{`snakeCase('fooBar')`}</p>
      <p className="comment">{`// => ${String(snakeCase("fooBar"))}`}</p>
      <p className="code">{`snakeCase('--FOO-BAR--')`}</p>
      <p className="comment">{`// => ${String(snakeCase("--FOO-BAR--"))}`}</p>
    </>
  )
}

export default Demo
