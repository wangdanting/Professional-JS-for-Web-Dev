import React, { PureComponent, Fragment } from "react";

function IfElseOperator(props) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <p>已登录</p>;
  }
  return <p>未登录</p>;
}

function LogicalOperator(props) {
  const { isLoggedIn } = props;
  return <p>{isLoggedIn && <span>您</span>}是猪</p>;
}

function SanMuOperator(props) {
  const { isLoggedIn } = props;
  return <p>this user is {isLoggedIn ? "已登录" : "未登录"}</p>;
}

class ConditionalRendering extends PureComponent {
  render() {
    return (
      <Fragment>
        <IfElseOperator isLoggedIn={false} />
        <LogicalOperator isLoggedIn={false} />
        <SanMuOperator isLoggedIn={true} />
      </Fragment>
    );
  }
}

export default ConditionalRendering;
