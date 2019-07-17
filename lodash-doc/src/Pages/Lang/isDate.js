import React from "react"
import isDate from "../../Lang/isDate"

const Demo = () => {
  return (
    <>
      <p className="code">
        Checks if `value` is classified as a `Date` object.
      </p>
      <p className="code">{`isDate(new Date)`}</p>
      <p className="comment">{`// => ${String(isDate(new Date()))}`}</p>
      <p className="code">{`isDate('Mon April 23 2012')`}</p>
      <p className="comment">{`// => ${String(
        isDate("Mon April 23 2012")
      )}`}</p>
    </>
  )
}

export default Demo
