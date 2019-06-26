import React from "react"
import lt from "../../Lang/lt"

const Demo = () => {
  return (
    <>
      <p className="code">Checks if `value` is less than `other`</p>
      <p className="code">{`lt(3, 1)`}</p>
      <p className="comment">{`// => ${String(lt(3, 1))}`}</p>
      <p className="code">{`lt(3, 3)`}</p>
      <p className="comment">{`// => ${String(lt(3, 3))}`}</p>
      <p className="code">{`lt(1, 3)`}</p>
      <p className="comment">{`// => ${String(lt(1, 3))}`}</p>
      <p className="code">{`lt('1', '3')`}</p>
      <p className="comment">{`// => ${String(lt("1", "3"))}`}</p>
      <p className="code">{`lt(new Date('2019-05-05'), new Date('2019-03-03'))`}</p>
      <p className="comment">{`// => ${String(
        lt(new Date("2019-05-05"), new Date("2019-03-03"))
      )}`}</p>
      <p className="code">{`lt('a', 'b')`}</p>
      <p className="comment">{`// => ${String(lt("a", "b"))}`}</p>
    </>
  )
}

export default Demo
