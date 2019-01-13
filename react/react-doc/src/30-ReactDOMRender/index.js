import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

function callback() {
  console.log("render end");
}

class ReactDOMRender extends PureComponent {
  render() {
    return <div>ReactDOMRender</div>;
  }
}
export default ReactDOMRender;

ReactDOM.render(
  <ReactDOMRender />,
  document.getElementById("app-root"),
  callback
);
