import React from "react"
import toUpper from "../../String/toUpper"

const Demo = () => {
  return (
    <>
      <p className="code">转换整个string字符串的字符为大写</p>
      <p className="code">{`toUpper('--foo-bar--')`}</p>
      <p className="comment">{`// => ${String(toUpper("--foo-bar--"))}`}</p>
      <p className="code">{`toUpper('fooBar')`}</p>
      <p className="comment">{`// => ${String(toUpper("fooBar"))}`}</p>
      <p className="code">{`toUpper('__foo_bar__')`}</p>
      <p className="comment">{`// => ${String(toUpper("__foo_bar__"))}`}</p>
    </>
  )
}

export default Demo
