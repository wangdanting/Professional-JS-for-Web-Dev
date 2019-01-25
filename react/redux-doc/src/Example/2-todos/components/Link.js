import React, { PureComponent } from "react";

class Link extends PureComponent {
  render() {
    const { onClick, active, children } = this.props;
    return (
      <button
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: "4px"
        }}
      >
        {children}
      </button>
    );
  }
}

export default Link;
