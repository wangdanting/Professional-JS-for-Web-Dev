import React from "react"
import times from "../../Util/times"

const Demo = () => {
  return (
    <>
      <p className="code">
        调用iteratee
        n次，每次调用返回的结果存入到数组中，iteratee调入一个参数:index
      </p>
      <p className="code">{`times(7, String)`}</p>
      <p className="comment">{`// => ${String(times(7, String))}`}</p>
      <p className="code">{`times(7, value => value * 2)`}</p>
      <p className="comment">{`// => ${String(
        times(7, value => value * 2)
      )}`}</p>
    </>
  )
}

export default Demo
