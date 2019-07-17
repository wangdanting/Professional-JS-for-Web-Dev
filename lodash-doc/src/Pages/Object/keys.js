import React from "react"
import keys from "../../Object/keys"

function Foo() {
  this.a = 1
  this.b = 2
}

Foo.prototype.c = 3

const Demo = () => {
  return (
    <>
      <p className="code">
        Creates an array of the own enumerable property names of object.
      </p>
      <p className="code">{`keys(new Foo())`}</p>
      <p className="comment">{`// => ${String(keys(new Foo()))}`}</p>
      <p className="code">{`keys('hi')`}</p>
      <p className="comment">{`// => ${String(keys("hi"))}`}</p>
    </>
  )
}

export default Demo
