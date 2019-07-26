import React from "react"

const Demo = () => {
  return (
    <>
      <p className="code">
        创建一个切片数组，去除array尾部的n个元素(n的默认值为1)
      </p>
      <p className="code">{`var array = [1, 2, 3]`}</p>
      <p className="code">{`fill(array, "a")`}</p>
      <p className="comment">{`// => ['a', 'a', 'a']`}</p>
      <p className="code">{`array`}</p>
      <p className="comment">{`// => ['a', 'a', 'a']`}</p>
      <p className="code">{`fill(Array(3), 2)`}</p>
      <p className="comment">{`// => [2, 2, 2]`}</p>
      <p className="code">{`fill([4, 6, 8, 10], '*', 1, 3)`}</p>
      <p className="comment">{`// => [4, "*", "*", 10]`}</p>
    </>
  )
}

export default Demo
