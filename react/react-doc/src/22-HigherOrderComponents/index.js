import React, { PureComponent, Fragment } from "react";

function ListItem(props) {
  const { id, title } = props;
  return <li key={id}>{title}</li>;
}

function withSubscription(WrappedComponent, selectData) {
  return class extends PureComponent {
    state = {
      data: selectData() // [0]
    };
    componentDidMount() {}
    render() {
      const { abc } = this.props;
      const { data } = this.state;
      const list = data.map(item => (
        <WrappedComponent key={item} id={item} title={item} />
      ));
      return <ul className={abc}>{list}</ul>;
    }
  };
}

class HigherOrderComponents extends PureComponent {
  state = {
    arr: [0]
  };

  handleClick = () => {
    this.setState(prevState => {
      const arr = prevState.arr;
      return {
        arr: [...arr, arr.pop() + 1]
      };
    });
  };

  render() {
    const { arr } = this.state;
    //你不能在组件的render函数中调用高阶函数
    const CommentListWithSubscription = withSubscription(ListItem, () => arr);
    return (
      <Fragment>
        <CommentListWithSubscription abc="abc" />
        <button onClick={this.handleClick}>add</button>
      </Fragment>
    );
  }
}

export default HigherOrderComponents;
