import React from "react"
import replace from "../../String/replace"

const Demo = () => {
  return (
    <>
      <p className="code">替换string字符串中匹配的pattern为给定的replacement</p>
      <p className="code">{`replace('Hi Fred', 'Fred', 'Barney')`}</p>
      <p className="comment">{`// => ${String(
        replace("Hi Fred", "Fred", "Barney")
      )}`}</p>
      <p className="code">{`replace('Hi Fred', 'Fred')`}</p>
      <p className="comment">{`// => ${String(replace("Hi Fred", "Fred"))}`}</p>
    </>
  )
}

export default Demo
