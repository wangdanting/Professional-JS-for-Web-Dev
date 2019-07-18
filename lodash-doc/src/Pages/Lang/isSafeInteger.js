import React from "react"
import isSafeInteger from "../../Lang/isSafeInteger"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is a safe integer.</p>
      <p className="comment">
        Checks if `value` is a safe integer.An integer is safe if it`s an
        IEEE-754
      </p>
      <p className="comment">
        double precision number which isn't the result of a rounded unsafe
        integer
      </p>
      <p className="code">{`isSafeInteger(1)`}</p>
      <p className="comment">{`// => ${String(isSafeInteger(1))}`}</p>
      <p className="code">{`isSafeInteger(Number.MIN_VALUE)`}</p>
      <p className="comment">{`// => ${String(
        isSafeInteger(Number.MIN_VALUE)
      )}`}</p>
      <p className="code">{`isSafeInteger(Infinity)`}</p>
      <p className="comment">{`// => ${String(isSafeInteger(Infinity))}`}</p>
      <p className="code">{`isSafeInteger('3')`}</p>
      <p className="comment">{`// => ${String(isSafeInteger("3"))}`}</p>
    </>
  )
}

export default Demo
