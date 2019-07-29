import React from "react"
import nth from "../../Array/nth"

var array = ["a", "b", "c", "d"]

const Demo = () => {
  return (
    <>
      <p className="code">
        获取array数组的第n个元素，如果n为负数，则返回从数组结尾开始的第n个元素
      </p>
      <p className="code">{`var array = ['a', 'b', 'c', 'd']`}</p>
      <p className="code">{`nth(array, 1)`}</p>
      <p className="comment">{`// => ${String(nth(array, 1))}`}</p>
      <p className="code">{`nth(array, -2)`}</p>
      <p className="comment">{`// => ${String(nth(array, -2))}`}</p>
      <p className="code">{`nth('uje7ee', -7)`}</p>
      <p className="comment">{`// => ${String(nth("uje7ee", -7))}`}</p>
    </>
  )
}

export default Demo
