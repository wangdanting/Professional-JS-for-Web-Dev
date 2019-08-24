import React from "react"
import rest from "../../Function/rest"

const func = (one, two) => {
  console.log(one, "one")
  console.log(two, "two")
}

const say = rest(func)
say(1, 2, 3, 4)

const func1 = (one, two, three) => {
  console.log(one, "one")
  console.log(two, "two")
  console.log(three, "three")
}

const say1 = rest(func1, 2)
say1(1, 2, 3, 4)

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个函数，调用func时，this绑定到创建的新函数，并且start之后的参数作为数组传入
      </p>
      <p className="code">{`// => 请看console控制台`}</p>
    </>
  )
}

export default Demo
