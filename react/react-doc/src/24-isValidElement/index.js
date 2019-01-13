import React, { PureComponent } from "react";

function Abc() {
  return <div>abc</div>;
}

class DEF extends PureComponent {
  render() {
    return <div>sss</div>;
  }
}

const fg = <div>ddd</div>;

class IsValidElement extends PureComponent {
  render() {
    const abc = React.isValidElement(Abc); //false
    const def = React.isValidElement(DEF); //false
    const fgf = React.isValidElement(fg); //true

    return <div>{fgf.toString()}</div>;
  }
}

export default IsValidElement;
