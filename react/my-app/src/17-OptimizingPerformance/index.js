import React, { PureComponent, Fragment } from "react";
import PureComponent1 from "./pureComponent";

class Example extends React.Component {
  state = {
    count: 1
  };

  //不能用在PureComponent里，因为PureComponent已经自带以下功能
  //但React.PureComponent它只做一个浅比较。但是由于浅比较会忽略属性或状态突变的情况，此时你不能使用它
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }

    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  handleChange = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { color } = this.props;
    const { count } = this.state;
    return (
      <Fragment>
        <p>
          {color}
          {count}
        </p>
        <button onClick={this.handleChange}>counter</button>
      </Fragment>
    );
  }
}

class OptimizingPerformance extends PureComponent {
  render() {
    return (
      <Fragment>
        <Example color="red" />
        <PureComponent1 />
      </Fragment>
    );
  }
}

export default OptimizingPerformance;
