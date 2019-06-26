import React from "react"
import castArray from "../../Lang/castArray"

const Demo = () => {
  return (
    <>
      <p className="code">Casts `value` as an array if it's not one.</p>
      <p className="code">{`castArray(1)`}</p>
      <p className="comment">{`// =>[1] `}</p>
      <p className="code">{`castArray({a: 1})`}</p>
      <p className="comment">{`// =>[{ a: 1 }] `}</p>
      <p className="code">{`castArray('abc')`}</p>
      <p className="comment">{`// =>['abc'] `}</p>
      <p className="code">{`castArray(null)`}</p>
      <p className="comment">{`// =>[null] `}</p>
      <p className="code">{`castArray(undefined)`}</p>
      <p className="comment">{`// =>[undefined] `}</p>
      <p className="code">{`castArray()`}</p>
      <p className="comment">{`// =>[] `}</p>
      <p className="code">{`var a = [1, 2]; a === castArray(a)`}</p>
      <p className="comment">{`// =>true `}</p>
    </>
  )
}

export default Demo
