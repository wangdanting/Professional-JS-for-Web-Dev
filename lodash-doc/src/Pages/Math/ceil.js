import React from "react"
import ceil from "../../Math/ceil"

const Demo = () => {
  return (
    <>
      <p className="code">根据precision(精度)向上舍入number。</p>
      <p className="code">{`ceil(4.006)`}</p>
      <p className="comment">{`// => ${String(ceil(4.006))}`}</p>
      <p className="code">{`ceil(6.004, 2)`}</p>
      <p className="comment">{`// => ${String(ceil(6.004, 2))}`}</p>
    </>
  )
}

export default Demo
