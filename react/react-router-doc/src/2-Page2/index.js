import React, { PureComponent } from "react";

class Page2 extends PureComponent {
  render() {
    console.log(this.props, "props"); //{match: {...}, location: {...}, hisotry: {...}, staticContext: undefined, extra: 'abc' }
    return <p>Page2</p>;
  }
}

export default Page2;
