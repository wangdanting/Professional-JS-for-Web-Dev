import React from "react"
import now from "../../Date/now"

const Demo = () => {
  return (
    <>
      <p className="code">
        获得Unix纪元(1 January 1970 00:00:00 UTC) 直到现在的毫秒数
      </p>
      <p className="code">{`now()`}</p>
      <p className="comment">{`// => ${String(now())}`}</p>
    </>
  )
}

export default Demo
