import React, { PureComponent } from "react";
// import { add } from "./math";

class DynamicImport extends PureComponent {
  handleClick = () => {
    //动态加载
    import("./math").then(math => {
      console.log(math.add(16, 26));
    });
    // console.log(add(16, 26));
  };

  render() {
    return <button onClick={this.handleClick}>add</button>;
  }
}
export default DynamicImport;
