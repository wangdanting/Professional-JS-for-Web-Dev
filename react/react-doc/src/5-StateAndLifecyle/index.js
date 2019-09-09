import React, { PureComponent } from "react"

class StateAndLifecyle extends PureComponent {
  static defaultProps = {
    num: 1
  }

  state = {
    counter: 0
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.num
    }))
  }

  render() {
    const { counter } = this.state
    return <p>{counter}</p>
  }
}
export default StateAndLifecyle
