import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        反转array,
        使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，以此类推
      </p>
      <p className="code">{`var array = ['a', 'b', 'c', 'd']`}</p>
      <p className="code">{`reverse(array)`}</p>
      <p className="comment">{`// => ["d", "c", "b", "a"]`}</p>
      <p className="code">{`array`}</p>
      <p className="comment">{`// => ["d", "c", "b", "a"]`}</p>
    </>
  )
}

export default Demo
