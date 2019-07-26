import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        与toPairs正好相反，这个方法返回一个由键值对pairs构成的对象
      </p>
      <p className="code">{`fromPairs([['a', 1], ['b', 2]])`}</p>
      <p className="comment">{`// => {a: 1, b: 2}`}</p>
      <p className="code">{`fromPairs([['a'], ['b']])`}</p>
      <p className="comment">{`// => {a: undefined, b: undefined}`}</p>
    </>
  )
}

export default Demo
