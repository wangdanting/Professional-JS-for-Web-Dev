import React from "react"
import lowerCase from "../../String/lowerCase"

const Demo = () => {
  return (
    <>
      <p className="code">转换字符串以空格分开单词，并转为小写</p>
      <p className="code">{`lowerCase('--Foo-Bar--')`}</p>
      <p className="comment">{`// => ${String(lowerCase("--Foo-Bar--"))}`}</p>
      <p className="code">{`lowerCase('fooBar')`}</p>
      <p className="comment">{`// => ${String(lowerCase("fooBar"))}`}</p>
      <p className="code">{`lowerCase('__FOO_BAR__')`}</p>
      <p className="comment">{`// => ${String(lowerCase("__FOO_BAR__"))}`}</p>
    </>
  )
}

export default Demo
