import React, { Component } from "react"
import after from "../../Function/after"

class Demo extends Component {
  state = {
    num: 0
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", after(5, this.add))
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
          创建一个调用函数，通过this绑定和创建函数的参数调用func，当他被调用n或更多次之后将马上触发func
        </p>
        <p className="code">
          <button type="button" id="btn">
            点击5次我+1
          </button>
        </p>
        <p className="comment">{this.state.num}</p>
      </>
    )
  }
}

export default Demo
