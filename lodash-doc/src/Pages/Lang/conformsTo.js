import React from "react"
import conformsTo from "../../Lang/conformsTo"

const object = { a: 1, b: 2 }

const Demo = () => {
  return (
    <>
      <p className="code">
        通过调用断言source的属性与 object 的相应属性值，检查 object是否符合
        source。
      </p>
      <p className="code">{`conformsTo(object, {'b': function(n) {return n > 1}})`}</p>
      <p className="comment">{`// => ${String(
        conformsTo(object, {
          b: function(n) {
            return n > 1
          }
        })
      )}`}</p>
      <p className="code">{`conformsTo(object, {'b': function(n) {return n > 2}})`}</p>
      <p className="comment">{`// => ${String(
        conformsTo(object, {
          b: function(n) {
            return n > 2
          }
        })
      )}`}</p>
      <p className="code">{`conformsTo(object, {'b': function(n) {return n > 2}, 'a': function(n) {return n > 0}})`}</p>
      <p className="comment">{`// => ${String(
        conformsTo(object, {
          b: function(n) {
            return n > 1
          },
          a: function(n) {
            return n > 0
          }
        })
      )}`}</p>
    </>
  )
}

export default Demo
