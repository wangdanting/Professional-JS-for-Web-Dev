import React, { PureComponent } from "react";

class OtherComponent extends PureComponent {
  state = {
    arr: 60
  };
  render() {
    const { arr } = this.state;
    let list = [];
    for (let i = 0, len = arr; i < len; i++) {
      list.push(<li key={i}>{i}</li>);
    }

    return <ul>{list}</ul>;
  }
}
export default OtherComponent;
