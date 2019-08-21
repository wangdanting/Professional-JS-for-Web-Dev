import React, { Component } from "react"
import before from "../../Function/before"

class Demo extends Component {
  state = {
    num: 0
  }

  componentDidMount() {
    document
      .getElementById("btn")
      .addEventListener("click", before(5, this.add))
  }

  add = () => {
    this.setState(prev => ({
      num: prev.num + 1
    }))
  }

  render() {
    return (
      <>
        <p className="code">
          创建一个调用函数，通过this绑定和创建函数的参数调用func，调用次数不操过n次，之后再调用这个函数，将返回一次最后调用func的结果
        </p>
        <p className="code">
          <button type="button" id="btn">
            点击我+1
          </button>
        </p>
        <p className="comment">{this.state.num}</p>
      </>
    )
  }
}

export default Demo
