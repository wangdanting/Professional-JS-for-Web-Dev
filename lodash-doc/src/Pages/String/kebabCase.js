import React from "react"
import kebabCase from "../../String/kebabCase"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串为中滑线连接格式</p>
      <p className="code">{`kebabCase('Foo Bar')`}</p>
      <p className="comment">{`// => ${String(kebabCase("Foo Bar"))}`}</p>
      <p className="code">{`kebabCase('fooBar')`}</p>
      <p className="comment">{`// => ${String(kebabCase("fooBar"))}`}</p>
      <p className="code">{`kebabCase('__FOO_BAR__')`}</p>
      <p className="comment">{`// => ${String(kebabCase("__FOO_BAR__"))}`}</p>
    </>
  )
}

export default Demo
