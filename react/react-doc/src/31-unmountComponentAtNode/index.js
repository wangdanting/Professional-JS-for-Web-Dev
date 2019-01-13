import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

class UnmountComponentAtNode extends PureComponent {
  render() {
    const removeResult = ReactDOM.unmountComponentAtNode(
      document.getElementById("app-root")
    );

    console.log(removeResult, "removeResult");
    return <div>UnmountComponentAtNode</div>;
  }
}
export default UnmountComponentAtNode;
