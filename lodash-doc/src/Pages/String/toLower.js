import React from "react"
import toLower from "../../String/toLower"

const Demo = () => {
  return (
    <>
      <p className="code">转换整个string字符串的字符为小写</p>
      <p className="code">{`toLower('--Foo-Bar--')`}</p>
      <p className="comment">{`// => ${String(toLower("--Foo-Bar--"))}`}</p>
      <p className="code">{`toLower('fooBar')`}</p>
      <p className="comment">{`// => ${String(toLower("fooBar"))}`}</p>
      <p className="code">{`toLower('__FOO_BAR__')`}</p>
      <p className="comment">{`// => ${String(toLower("__FOO_BAR__"))}`}</p>
    </>
  )
}

export default Demo
