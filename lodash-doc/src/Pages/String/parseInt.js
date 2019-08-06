import React from "react"
import parseInt from "../../String/parseInt"

const Demo = () => {
  return (
    <>
      <p className="code">
        转换string字符串为指定基数的整数，如果基数是undefined或者0,则radix基数默认是10，如果string字符串是16进制，则radix基数为16
      </p>
      <p className="code">{`parseInt('08')`}</p>
      <p className="comment">{`// => ${String(parseInt("08"))}`}</p>
      <p className="code">{`parseInt('18', 16)`}</p>
      <p className="comment">{`// => ${String(parseInt("18", 16))}`}</p>
    </>
  )
}

export default Demo
