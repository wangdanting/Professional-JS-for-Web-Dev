import React from "react"
import isObject from "../../Lang/isObject"
import "../style.css"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is the `Object`</p>
      <p className="comment">
        (e.g. arrays, function, objects, regexes, `new Number(0)`, and `new
        String('')`)
      </p>
      <p className="code">{`isObject({})`}</p>
      <p className="comment">{`// => ${String(isObject({}))}`}</p>
      <p className="code">{`isObject([1, 2, 3])`}</p>
      <p className="comment">{`// => ${String(isObject([1, 2, 3]))}`}</p>
      <p className="code">{`isObject(new RegExp())`}</p>
      <p className="comment">{`// => ${String(isObject(new RegExp()))}`}</p>
      <p className="code">{`isObject(()=>{})`}</p>
      <p className="comment">{`// => ${String(isObject(() => {}))}`}</p>
      <p className="code">{`isObject(new Number(0))`}</p>
      <p className="comment">{`// => ${String(isObject(new Number(0)))}`}</p>
      <p className="code">{`isObject(null)`}</p>
      <p className="comment">{`// => ${String(isObject(null))}`}</p>
      <p className="code">{`isObject(Symbol())`}</p>
      <p className="comment">{`// => ${String(isObject(Symbol()))}`}</p>
    </>
  )
}

export default Demo
