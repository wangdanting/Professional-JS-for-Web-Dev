import React from "react"
import camelCase from "../../String/camelCase"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串string为驼峰写法</p>
      <p className="code">{`camelCase('Foo Bar')`}</p>
      <p className="comment">{`// => ${String(camelCase("Foo Bar"))}`}</p>
      <p className="code">{`camelCase('--foo-bar--')`}</p>
      <p className="comment">{`// => ${String(camelCase("--foo-bar--"))}`}</p>
      <p className="code">{`camelCase('__FOO_BAR__')`}</p>
      <p className="comment">{`// => ${String(camelCase("__FOO_BAR__"))}`}</p>
    </>
  )
}

export default Demo
