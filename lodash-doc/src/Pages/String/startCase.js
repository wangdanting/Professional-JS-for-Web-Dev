import React from "react"
import startCase from "../../String/startCase"

const Demo = () => {
  return (
    <>
      <p className="code">转换 string 字符串为 start case</p>
      <p className="code">{`startCase('--foo-bar--')`}</p>
      <p className="comment">{`// => ${String(startCase("--foo-bar--"))}`}</p>
      <p className="code">{`startCase('fooBar')`}</p>
      <p className="comment">{`// => ${String(startCase("fooBar"))}`}</p>
      <p className="code">{`startCase('__FOO_BAR__')`}</p>
      <p className="comment">{`// => ${String(startCase("__FOO_BAR__"))}`}</p>
    </>
  )
}

export default Demo
